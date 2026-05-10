const AI_CONFIG = {
    MOVE_TIME_LIMIT: 2800,
    RANDOMNESS_FACTOR: 0.15,
    OPENING_VARIETY: true,
    AGGRESSION_LEVEL: 0.6,
    POLL_INTERVAL: 200
};

const PIECE_VALUES = { p: 100, n: 320, b: 330, r: 500, q: 900, k: 20000 };

const PAWN_POSITION_BONUS = [
    [0,  0,  0,  0,  0,  0,  0,  0],
    [5, 10, 15, 20, 20, 15, 10,  5],
    [4,  8, 12, 16, 16, 12,  8,  4],
    [3,  6,  9, 12, 12,  9,  6,  3],
    [2,  4,  6,  8,  8,  6,  4,  2],
    [1,  2,  3, -5, -5,  3,  2,  1],
    [0,  0,  0,  0,  0,  0,  0,  0],
    [0,  0,  0,  0,  0,  0,  0,  0]
];

const OPENING_BOOK = {
    'e2-e4': ['e7-e5', 'c7-c5', 'e7-e6', 'c7-c6'],
    'd2-d4': ['d7-d5', 'g8-f6', 'e7-e6'],
    'g1-f3': ['g8-f6', 'e7-e6', 'g8-h6'],
    'c2-c4': ['e7-e5', 'c7-c5', 'e7-e6'],
    'fallback': ['g8-f6', 'b8-c6', 'e7-e6', 'd7-d6', 'c7-c6', 'g7-g6', 'b8-a6', 'h7-h6', 'a7-a6', 'e7-e5']
};

class Chess2Bot {
    constructor() {
        this.game = null;
        this.color = 'black';
        this.opponentColor = 'white';
        this.moveHistory = [];
        this.isThinking = false;
        this.pollInterval = null;
        this._bindAIToggle();
    }

    _bindAIToggle() {
        document.querySelectorAll('input[name="opponent"]').forEach(radio => {
            radio.addEventListener('change', () => {
                const aiMode = document.getElementById('radio-ai-button')?.classList.contains('radio-button_checked');
                if (aiMode) this._pollTurn();
            });
        });
    }

    attachToGame(game) {
        this.game = game;
        if (this.pollInterval) clearInterval(this.pollInterval);
        
        this.pollInterval = setInterval(() => this._pollTurn(), AI_CONFIG.POLL_INTERVAL);
    }

    _pollTurn() {
        if (!this.game || this.game.over || this.isThinking) return;
        const aiMode = document.getElementById('radio-ai-button')?.classList.contains('radio-button_checked');
        if (!aiMode) return;

        const dialog = document.getElementById('choosing-figure');
        const isDialogOpen = dialog?.classList.contains('visible');

        if (isDialogOpen) {
            if (this.game.promotion?.color === this.color) {
                this._handlePromotion();
            }
            return;
        }

        if (this.game.currentTurn === this.color) {
            this._makeAIMove();
        }
    }

    async _makeAIMove() {
        if (this.isThinking || !this.game || this.game.over) return;
        if (this.game.currentTurn !== this.color) return;
        
        this.isThinking = true;
        const startTime = Date.now();
        
        await new Promise(r => setTimeout(r, 50));

        try {
            const allMoves = this._getAllLegalMoves(this.color);
            if (allMoves.length === 0) { this._submitMove(null); return; }

            let bestMove = this._tryOpeningBook(allMoves);
            if (!bestMove && Date.now() - startTime < AI_CONFIG.MOVE_TIME_LIMIT * 0.7) {
                bestMove = this._findBestMove(allMoves, startTime);
            }
            if (!bestMove) {
                const scored = allMoves.map(m => ({ move: m, score: this._evaluateMove(m) + this._addRandomness() }));
                scored.sort((a, b) => b.score - a.score);
                const top = scored.slice(0, Math.max(3, Math.floor(scored.length * 0.3)));
                bestMove = top[Math.floor(Math.random() * top.length)].move;
            }

            if (bestMove) {
                this._submitMove(bestMove);
                this.moveHistory.push(`${bestMove.from}-${bestMove.to}`);
                if (this.moveHistory.length > 20) this.moveHistory.shift();
            }
        } catch (e) {
            console.warn('AI move error:', e);
            const fallback = this._getAllLegalMoves(this.color);
            if (fallback.length > 0) this._submitMove(fallback[Math.floor(Math.random() * fallback.length)]);
        } finally {
            this.isThinking = false;
        }
    }

    _submitMove(move) {
        if (!move || !this.game) return;
        const f = document.getElementById('choosing-cell');
        const t = document.getElementById('cell-selection');
        const btn = document.getElementById('button-sending-move');
        if (f && t && btn) {
            f.value = move.from.toUpperCase();
            t.value = move.to.toUpperCase();
            setTimeout(() => btn.click(), 100);
        }
    }

    _handlePromotion() {
        const dialog = document.getElementById('choosing-figure');
        if (!dialog?.classList.contains('visible')) return;

        const choice = Math.random() < AI_CONFIG.RANDOMNESS_FACTOR ? Math.floor(Math.random() * 4) : 0;
        const boxes = Array.from(document.querySelectorAll('.choosing-figure_box'));
        const target = boxes[choice] || boxes[0];

        if (target) {
            setTimeout(() => {
                try {
                    target.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
                    target.dispatchEvent(new MouseEvent('click', { bubbles: true }));
                } catch { if (boxes[0]) boxes[0].click(); }
            }, 100);
        }
    }

    _getAllLegalMoves(color) {
        const moves = [];
        const board = this.game.board;
        const opp = color === 'white' ? 'black' : 'white';
        const king = this._findKing(board, color);
        const inCheck = king && this._isAttacked(board, king, opp);

        for (const from in board) {
            const pc = board[from]; if (!pc) continue;
            if ((pc === pc.toUpperCase() ? 'white' : 'black') !== color) continue;
            
            const type = pc.toLowerCase();
            for (const to of this._getTargets(board, from, type, color, opp, inCheck)) {
                if (board[to]?.toLowerCase() === 'k') continue;
                if (!inCheck && type !== 'k') {
                    const tb = { ...board }; delete tb[from]; tb[to] = pc;
                    if (this._isAttacked(tb, king, opp)) continue;
                }
                if (type === 'k' && this._isAttacked(board, to, opp)) continue;
                moves.push({ from, to, piece: pc, color });
            }
        }
        return moves;
    }

    _getTargets(board, from, type, color, opp, inCheck) {
        const { file, rank } = this._toIdx(from);
        const moves = [];
        const dir = color === 'white' ? 1 : -1;

        if (type === 'p') {
            const f1 = rank + dir;
            if (this._onBoard(file, f1) && !board[this._toCoord(file, f1)]) {
                moves.push(this._toCoord(file, f1));
                if (rank === (color==='white'?1:6) && !board[this._toCoord(file, rank+2*dir)]) moves.push(this._toCoord(file, rank+2*dir));
            }
            for (const df of [-1, 1]) {
                const nf=file+df, nr=rank+dir;
                if (this._onBoard(nf, nr)) {
                    const to=this._toCoord(nf, nr); const t=board[to];
                    if (t) {
                        const tc=t===t.toUpperCase()?'white':'black';
                        if (tc!==color) moves.push(to);
                        else if (this._isAttacked(board, to, opp)) moves.push(to);
                    }
                }
            }
        } else if (type === 'n') {
            for (const [df,dr] of [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]]) {
                if (this._onBoard(file+df, rank+dr)) {
                    const to=this._toCoord(file+df, rank+dr); const t=board[to];
                    if (!t) moves.push(to);
                    else { const tc=t===t.toUpperCase()?'white':'black'; if(tc!==color||this._isAttacked(board,to,opp)) moves.push(to); }
                }
            }
        } else if (['b','r','q'].includes(type)) {
            const dirs = type==='b' ? [[1,1],[1,-1],[-1,1],[-1,-1]] : type==='r' ? [[0,1],[0,-1],[1,0],[-1,0]] : [[0,1],[0,-1],[1,0],[-1,0],[1,1],[1,-1],[-1,1],[-1,-1]];
            for (const [df,dr] of dirs) {
                let nf=file+df, nr=rank+dr;
                while (this._onBoard(nf, nr)) {
                    const to=this._toCoord(nf, nr); const t=board[to];
                    if (!t) moves.push(to);
                    else { const tc=t===t.toUpperCase()?'white':'black'; if(tc!==color||this._isAttacked(board,to,opp)) moves.push(to); break; }
                    nf+=df; nr+=dr;
                }
            }
        } else if (type === 'k') {
            for (const [df,dr] of [[0,1],[0,-1],[1,0],[-1,0],[1,1],[1,-1],[-1,1],[-1,-1]]) {
                if (this._onBoard(file+df, rank+dr)) {
                    const to=this._toCoord(file+df, rank+dr);
                    if (this._pawnBlocksKing(board, to, opp, color)) continue;
                    const t=board[to];
                    if (!t) moves.push(to);
                    else if ((t===t.toUpperCase()?'white':'black')!==color && t.toLowerCase()!=='k') moves.push(to);
                }
            }
            if (!inCheck) this._addCastling(board, file, rank, color, moves);
        }
        return moves;
    }

    _addCastling(board, f, r, color, moves) {
        if (r!==(color==='white'?0:7)) return;
        const opp=color==='white'?'black':'white';
        if (!board[`f${r+1}`] && !board[`g${r+1}`] && board[`h${r+1}`]) {
            const rh=board[`h${r+1}`];
            if (rh?.toLowerCase()==='r' && (rh===rh.toUpperCase())===(color==='white') && !this._isAttacked(board,`f${r+1}`,opp) && !this._isAttacked(board,`g${r+1}`,opp)) moves.push(`g${r+1}`);
        }
        if (!board[`b${r+1}`] && !board[`c${r+1}`] && !board[`d${r+1}`] && board[`a${r+1}`]) {
            const ra=board[`a${r+1}`];
            if (ra?.toLowerCase()==='r' && (ra===ra.toUpperCase())===(color==='white') && !this._isAttacked(board,`c${r+1}`,opp) && !this._isAttacked(board,`d${r+1}`,opp)) moves.push(`c${r+1}`);
        }
    }

    _isAttacked(board, coord, attacker) {
        if (!coord) return false;
        const { file, rank } = this._toIdx(coord);
        const pd = attacker === 'white' ? 1 : -1;
        for (const df of [-1,1]) { const p=board[this._toCoord(file+df,rank-pd)]; if(p?.toLowerCase()==='p' && (p===p.toUpperCase())===(attacker==='white')) return true; }
        for (const [df,dr] of [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]]) { const p=board[this._toCoord(file+df,rank+dr)]; if(p?.toLowerCase()==='n' && (p===p.toUpperCase())===(attacker==='white')) return true; }
        for (const [df,dr] of [[0,1],[0,-1],[1,0],[-1,0]]) { let nf=file+df,nr=rank+dr; while(this._onBoard(nf,nr)){const p=board[this._toCoord(nf,nr)]; if(p){if((p===p.toUpperCase()?'white':'black')===attacker && (p.toLowerCase()==='r'||p.toLowerCase()==='q')) return true; break;} nf+=df;nr+=dr;} }
        for (const [df,dr] of [[1,1],[1,-1],[-1,1],[-1,-1]]) { let nf=file+df,nr=rank+dr; while(this._onBoard(nf,nr)){const p=board[this._toCoord(nf,nr)]; if(p){if((p===p.toUpperCase()?'white':'black')===attacker && (p.toLowerCase()==='b'||p.toLowerCase()==='q')) return true; break;} nf+=df;nr+=dr;} }
        for (const [df,dr] of [[0,1],[0,-1],[1,0],[-1,0],[1,1],[1,-1],[-1,1],[-1,-1]]) { const p=board[this._toCoord(file+df,rank+dr)]; if(p?.toLowerCase()==='k' && (p===p.toUpperCase())===(attacker==='white')) return true; }
        return false;
    }

    _pawnBlocksKing(board, to, opp, kingCol) {
        const { file, rank } = this._toIdx(to);
        const pd = opp === 'white' ? 1 : -1;
        for (const df of [-1,1]) {
            const pf=file+df, pr=rank+pd;
            if (this._onBoard(pf,pr)) {
                const p=board[this._toCoord(pf,pr)];
                if (p?.toLowerCase()==='p' && (p===p.toUpperCase())===(opp==='white')) {
                    const light=(file+rank)%2!==0;
                    if (!((light && kingCol==='white') || (!light && kingCol==='black'))) return true;
                }
            }
        }
        return false;
    }

    _findKing(board, color) { const k=color==='white'?'K':'k'; for(const c in board) if(board[c]===k) return c; return null; }
    _toIdx(c) { return c?.length>=2 ? {file:c.charCodeAt(0)-97, rank:parseInt(c[1])-1} : {file:-1, rank:-1}; }
    _toCoord(f,r) { return `${String.fromCharCode(97+f)}${r+1}`; }
    _onBoard(f,r) { return f>=0 && f<8 && r>=0 && r<8; }

    _findBestMove(moves, start) {
        let best=null, bestS=-Infinity;
        for (const m of moves) {
            if (Date.now()-start > AI_CONFIG.MOVE_TIME_LIMIT) break;
            const tb={...this.game.board}; const p=tb[m.from]; delete tb[m.from];
            const t=tb[m.to];
            if (t) { if (this._winCollision(p,t,m.to)) tb[m.to]=p; else continue; }
            else tb[m.to]=p;
            const s = this._evalPos(tb, this.color) + this._addRandomness();
            if (s>bestS) { bestS=s; best=m; }
        }
        return best;
    }

    _winCollision(my, en, sq) {
        const mt=my.toLowerCase(), et=en.toLowerCase();
        if (mt!=='k' && et!=='k' && PIECE_VALUES[et]>PIECE_VALUES[mt]*1.2) return true;
        const {file,rank}=this._toIdx(sq);
        return (file+rank)%2===0 ? (my===my.toUpperCase()?'white':'black')==='black' : (my===my.toUpperCase()?'white':'black')==='white';
    }

    _evalPos(board, color) {
        let score=0; const opp=color==='white'?'black':'white';
        for(const c in board) {
            const p=board[c]; if(!p) continue;
            const pc=p===p.toUpperCase()?'white':'black'; const pt=p.toLowerCase();
            const {file,rank}=this._toIdx(c);
            let v=PIECE_VALUES[pt]||0;
            if(pt==='p') v+=(PAWN_POSITION_BONUS[pc==='white'?rank:7-rank]?.[file]||0)+(pc==='white'?rank:7-rank)*5;
            if(file>=2&&file<=5&&rank>=2&&rank<=5) v+=10;
            if(pt==='k') {
                if(this._isAttacked(board,c,opp)) v-=50;
                if(Object.values(board).filter(x=>x&&(x===x.toUpperCase()?'white':'black')===opp).length<5) v+=(7-Math.abs(3.5-file)-Math.abs(3.5-rank))*5;
            }
            score += pc===color ? v : -v;
        }
        score += (this._mat(board,color)-this._mat(board,opp))*2;
        if(AI_CONFIG.AGGRESSION_LEVEL>0.5) score+=this._attCnt(board,color,opp)*AI_CONFIG.AGGRESSION_LEVEL*5;
        return score;
    }

    _mat(b,c) { let s=0; for(const p of Object.values(b)) if(p&&(p===p.toUpperCase()?'white':'black')===c) s+=PIECE_VALUES[p.toLowerCase()]||0; return s; }
    _attCnt(b,a,d) { let c=0; for(const k in b) if(b[k]&&(b[k]===b[k].toUpperCase()?'white':'black')===a && this._isAttacked(b,k,d)) c++; return c; }

    _evaluateMove(move) {
        let s=0; const b=this.game.board, t=b[move.to];
        if(t) { const tv=PIECE_VALUES[t.toLowerCase()]||0, mv=PIECE_VALUES[move.piece.toLowerCase()]||0; s+= tv>mv?(tv-mv)*1.5 : tv===mv?10:0; }
        if(this.moveHistory.length<6) {
            const {file,rank}=this._toIdx(move.to);
            if(['n','b'].includes(move.piece.toLowerCase()) && rank>=2&&rank<=5&&file>=2&&file<=5) s+=30;
            if(move.piece.toLowerCase()==='p' && (file===3||file===4)) s+=15;
        }
        if(this._isAttacked(b,move.to,this.opponentColor) && !t) s-=20;
        if(t && ((t===t.toUpperCase()?'white':'black')===this.color) && PIECE_VALUES[move.piece.toLowerCase()]<PIECE_VALUES[t.toLowerCase()]*0.8) s+=25;
        if(move.piece.toLowerCase()==='p' && ((this.color==='white'&&move.to[1]==='8')||(this.color==='black'&&move.to[1]==='2'))) s+=100;
        for(const c in b) { const p=b[c]; if(p&&(p===p.toUpperCase()?'white':'black')===this.color && this._isAttacked(b,c,this.opponentColor) && this._defends(move,c,b)) s+=15; }
        return s;
    }

    _defends(m,dc,b) {
        const {file,rank}=this._toIdx(m.to), {file:df,rank:dr}=this._toIdx(dc);
        const pt=m.piece.toLowerCase();
        if(pt==='n') { const a=Math.abs(file-df),b=Math.abs(rank-dr); return (a===2&&b===1)||(a===1&&b===2); }
        if(pt==='b') return Math.abs(file-df)===Math.abs(rank-dr);
        if(pt==='r') return file===df||rank===dr;
        if(pt==='q') return file===df||rank===dr||Math.abs(file-df)===Math.abs(rank-dr);
        if(pt==='k') return Math.abs(file-df)<=1&&Math.abs(rank-dr)<=1;
        if(pt==='p') { const dir=m.piece===m.piece.toUpperCase()?1:-1; return (file===df+1||file===df-1)&&rank===dr-dir; }
        return false;
    }

    _tryOpeningBook(moves) {
        if(!AI_CONFIG.OPENING_VARIETY || this.moveHistory.length>4) return null;
        const last=this.moveHistory[this.moveHistory.length-1]; if(!last) return null;
        const opts=OPENING_BOOK[last]||OPENING_BOOK['fallback'];
        const av=moves.filter(m=>opts.includes(`${m.from}-${m.to}`));
        if(av.length>0) return Math.random()<AI_CONFIG.RANDOMNESS_FACTOR*2 ? av[Math.floor(Math.random()*av.length)] : av[0];
        return null;
    }

    _addRandomness() { return (Math.random()-0.5)*AI_CONFIG.RANDOMNESS_FACTOR*100; }

    reset() { this.isThinking=false; this.moveHistory=[]; }
    destroy() { if(this.pollInterval) clearInterval(this.pollInterval); this.reset(); }
}

let aiBot = null;
document.addEventListener('DOMContentLoaded', () => {
    const check = setInterval(() => {
        if (window.game && !aiBot) {
            aiBot = new Chess2Bot();
            aiBot.attachToGame(window.game);
            window.aiBot = aiBot;
            clearInterval(check);
        }
    }, 500);

    const origReset = window.resetChessGame;
    window.resetChessGame = () => { origReset?.(); aiBot?.reset(); };
    window.addEventListener('beforeunload', () => aiBot?.destroy());
});

if (typeof module !== 'undefined' && module.exports) module.exports = { Chess2Bot, AI_CONFIG };