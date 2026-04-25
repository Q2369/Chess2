const PIECE_SVG_PATHS = {
    q: '<path d="M88.54,31.46C87.63,30.56,86.38,30,85,30c-2.76,0-5,2.24-5,5v5H70v-5c0-2.76-2.24-5-5-5h-5V15 c0-1.38-0.56-2.63-1.46-3.54C57.63,10.56,56.38,10,55,10c-2.76,0-5,2.24-5,5v15h-5c-2.76,0-5,2.24-5,5v5H30v-5 c0-1.38-0.56-2.63-1.46-3.54C27.63,30.56,26.38,30,25,30c-2.76,0-5,2.24-5,5v20c0,2.76,2.24,5,5,5h5v5c0,2.76,2.24,5,5,5h5v10h-5 c-2.76,0-5,2.24-5,5v5h-5c-1.38,0-2.63,0.56-3.54,1.46C20.56,92.37,20,93.62,20,95c0,2.76,2.24,5,5,5h60 c1.38,0,2.63-0.56,3.54-1.46C89.44,97.63,90,96.38,90,95c0-2.76-2.24-5-5-5h-5v-5c0-2.76-2.24-5-5-5h-5V70h5c2.76,0,5-2.24,5-5v-5 h5c2.76,0,5-2.24,5-5V35C90,33.62,89.44,32.37,88.54,31.46z M60,40v10H50V40H60z"/>',
    n: '<path d="M90,35v40c0,2.76-2.24,5-5,5h-5v10h5c2.76,0,5,2.24,5,5c0,1.38-0.56,2.63-1.46,3.54 C87.63,99.44,86.38,100,85,100H25c-2.76,0-5-2.24-5-5c0-1.38,0.56-2.63,1.46-3.54C22.37,90.56,23.62,90,25,90h5v-5 c0-2.76,2.24-5,5-5h5v-5c0-2.76,2.24-5,5-5h5V60H35c-2.76,0-5-2.24-5-5V45c0-2.76,2.24-5,5-5h5v-5c0-2.76,2.24-5,5-5h5V15 c0-2.76,2.24-5,5-5c1.38,0,2.63,0.56,3.54,1.46C59.44,12.37,60,13.62,60,15v5h10v-5c0-2.76,2.24-5,5-5c1.38,0,2.63,0.56,3.54,1.46 C79.44,12.37,80,13.62,80,15v15h5C87.76,30,90,32.24,90,35z"/>',
    r: '<path d="M90,95c0,1.38-0.56,2.63-1.46,3.54C87.63,99.44,86.38,100,85,100H25c-2.76,0-5-2.24-5-5c0-1.38,0.56-2.63,1.46-3.54C22.37,90.56,23.62,90,25,90h5v-5c0-2.76,2.24-5,5-5h5V50h-5c-2.76,0-5-2.24-5-5V25c0-2.76,2.24-5,5-5c1.38,0,2.63,0.56,3.54,1.46C39.44,22.37,40,23.62,40,25v5h10v-5c0-2.76,2.24-5,5-5c1.38,0,2.63,0.56,3.54,1.46C59.44,22.37,60,23.62,60,25v5h10v-5c0-2.76,2.24-5,5-5c1.38,0,2.63,0.56,3.54,1.46C79.44,22.37,80,23.62,80,25v20c0,2.76-2.24,5-5,5h-5v30h5c2.76,0,5,2.24,5,5v5h5C87.76,90,90,92.24,90,95z"/>',
    b: '<path d="M90,95c0,1.38-0.56,2.63-1.46,3.54C87.63,99.44,86.38,100,85,100H25c-2.76,0-5-2.24-5-5c0-1.38,0.56-2.63,1.46-3.54C22.37,90.56,23.62,90,25,90h5v-5c0-2.76,2.24-5,5-5h5V70h-5c-2.76,0-5-2.24-5-5V45c0-2.76,2.24-5,5-5c1.38,0,2.63,0.56,3.54,1.46C39.44,42.37,40,43.62,40,45v5h10V40h-5c-2.76,0-5-2.24-5-5c0-1.38,0.56-2.63,1.46-3.54C42.37,30.56,43.62,30,45,30h5v-5c0-2.76,2.24-5,5-5c1.38,0,2.63,0.56,3.54,1.46C59.44,22.37,60,23.62,60,25v5h5c2.76,0,5,2.24,5,5v5h5c2.76,0,5,2.24,5,5v20c0,2.76-2.24,5-5,5h-5v10h5c2.76,0,5,2.24,5,5v5h5C87.76,90,90,92.24,90,95z"/>',
    k: '<path d="M90,45v10c0,2.76-2.24,5-5,5h-5V50H60v10h20v5c0,2.76-2.24,5-5,5h-5v10h5c2.76,0,5,2.24,5,5v5h5 c2.76,0,5,2.24,5,5c0,1.38-0.56,2.63-1.46,3.54C87.63,99.44,86.38,100,85,100H25c-2.76,0-5-2.24-5-5c0-1.38,0.56-2.63,1.46-3.54 C22.37,90.56,23.62,90,25,90h5v-5c0-2.76,2.24-5,5-5h5V70h-5c-2.76,0-5-2.24-5-5v-5h20V50H30v10h-5c-2.76,0-5-2.24-5-5V45 c0-2.76,2.24-5,5-5h25V30h-5c-2.76,0-5-2.24-5-5c0-1.38,0.56-2.63,1.46-3.54C42.37,20.56,43.62,20,45,20h5v-5c0-2.76,2.24-5,5-5 c1.38,0,2.63,0.56,3.54,1.46C59.44,12.37,60,13.62,60,15v5h5c2.76,0,5,2.24,5,5c0,1.38-0.56,2.63-1.46,3.54 C67.63,29.44,66.38,30,65,30h-5v10h25C87.76,40,90,42.24,90,45z"/>',
    p: '<path d="M90,95c0,1.38-0.56,2.63-1.46,3.54C87.63,99.44,86.38,100,85,100H25c-2.76,0-5-2.24-5-5 c0-1.38,0.56-2.63,1.46-3.54C22.37,90.56,23.62,90,25,90h5v-5c0-2.76,2.24-5,5-5h5V65c0-2.76,2.24-5,5-5h5V50h-5 c-2.76,0-5-2.24-5-5c0-1.38,0.56-2.63,1.46-3.54C42.37,40.56,43.62,40,45,40h5v-5c0-2.76,2.24-5,5-5c1.38,0,2.63,0.56,3.54,1.46 C59.44,32.37,60,33.62,60,35v5h5c2.76,0,5,2.24,5,5c0,1.38-0.56,2.63-1.46,3.54C67.63,49.44,66.38,50,65,50h-5v10h5 c2.76,0,5,2.24,5,5v15h5c2.76,0,5,2.24,5,5v5h5C87.76,90,90,92.24,90,95z"/>'
};

const CHECK_COLOR = 'rgb(255, 100, 91)';
const VALID_MOVE_COLOR = 'rgb(255, 191, 0)';
const SELECTED_COLOR = 'rgb(255, 191, 0)';

const moveSound = new Audio('move.mp3');
moveSound.volume = 0.1;

function coordToIndex(coord) {
    if (!coord || typeof coord !== 'string' || coord.length < 2) return { file: -1, rank: -1 };
    return { file: coord.charCodeAt(0) - 97, rank: parseInt(coord[1]) - 1 };
}

function indexToCoord(file, rank) {
    return `${String.fromCharCode(97 + file)}${rank + 1}`;
}

function isOnBoard(f, r) { return f >= 0 && f < 8 && r >= 0 && r < 8; }
function cloneBoard(b) { return { ...b }; }
function getColor(piece) { return piece ? (piece === piece.toUpperCase() ? 'white' : 'black') : null; }
function getType(piece) { return piece ? piece.toLowerCase() : null; }

function isSquareAttacked(board, target, attackerColor, ignoreCoord = null) {
    const { file, rank } = coordToIndex(target);
    const pd = attackerColor === 'white' ? 1 : -1;

    for (const df of [-1, 1]) {
        const p = board[indexToCoord(file + df, rank - pd)];
        if (p && getType(p) === 'p' && getColor(p) === attackerColor) return true;
    }
    
    for (const [df, dr] of [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]]) {
        const p = board[indexToCoord(file+df, rank+dr)];
        if (p && getType(p) === 'n' && getColor(p) === attackerColor) return true;
    }

    for (const [df, dr] of [[0,1],[0,-1],[1,0],[-1,0]]) {
        let nf = file + df, nr = rank + dr;
        while (isOnBoard(nf, nr)) {
            if (ignoreCoord && indexToCoord(nf, nr) === ignoreCoord) {
                nf += df; nr += dr;
                continue;
            }
            const p = board[indexToCoord(nf, nr)];
            if (p) {
                if (getColor(p) === attackerColor && (getType(p) === 'r' || getType(p) === 'q')) return true;
                break;
            }
            nf += df; nr += dr;
        }
    }

    for (const [df, dr] of [[1,1],[1,-1],[-1,1],[-1,-1]]) {
        let nf = file + df, nr = rank + dr;
        while (isOnBoard(nf, nr)) {
            if (ignoreCoord && indexToCoord(nf, nr) === ignoreCoord) {
                nf += df; nr += dr;
                continue;
            }
            const p = board[indexToCoord(nf, nr)];
            if (p) {
                if (getColor(p) === attackerColor && (getType(p) === 'b' || getType(p) === 'q')) return true;
                break;
            }
            nf += df; nr += dr;
        }
    }
    
    for (const [df, dr] of [[0,1],[0,-1],[1,0],[-1,0],[1,1],[1,-1],[-1,1],[-1,-1]]) {
        const checkCoord = indexToCoord(file+df, rank+dr);
        if (ignoreCoord && checkCoord === ignoreCoord) continue;
        const p = board[checkCoord];
        if (p && getType(p) === 'k' && getColor(p) === attackerColor) return true;
    }
    
    return false;
}

class Piece {
    constructor(type, color) { this.type = type; this.color = color; }
    getMoves(board, from, opp, movedFlags) { return []; }
    toString() { const l = this.type.toUpperCase(); return this.color === 'white' ? l : l.toLowerCase(); }
}

class Pawn extends Piece {
    constructor(c) { super('p', c); this.dir = c==='white'?1:-1; }
    getMoves(board, from, opp, movedFlags) {
        const m = [];
        const {file, rank} = coordToIndex(from);
        const start = this.color==='white'?1:6;

        const fr = rank + this.dir;
        if (isOnBoard(file, fr)) {
            const to = indexToCoord(file, fr);
            if (!board[to]) {
                m.push({to});
                if (rank === start && !board[indexToCoord(file, rank + 2 * this.dir)]) {
                    m.push({to: indexToCoord(file, rank + 2 * this.dir), special: 'double'});
                }
            }
        }
        for (const df of [-1, 1]) {
            const nf = file + df, nr = rank + this.dir;
            if (isOnBoard(nf, nr)) {
                const to = indexToCoord(nf, nr);
                const target = board[to];
                if (target) {
                    const tc = getColor(target);
                    if (tc !== this.color) {
                        m.push({to, capture: true});
                    } else if (isSquareAttacked(board, to, opp)) {
                        m.push({to, sacrifice: true});
                    }
                }
            }
        }
        return m;
    }
}

class Rook extends Piece {
    constructor(c) { super('r', c); }
    getMoves(board, from, opp, movedFlags) {
        return this._slide(board, from, [[0,1],[0,-1],[1,0],[-1,0]], opp);
    }
    _slide(board, from, dirs, opp) {
        const m = [];
        const {file, rank} = coordToIndex(from);
        for (const [df, dr] of dirs) {
            let nf = file + df, nr = rank + dr;
            while (isOnBoard(nf, nr)) {
                const to = indexToCoord(nf, nr);
                if (!board[to]) {
                    m.push({to});
                } else {
                    const tc = getColor(board[to]);
                    if (tc !== this.color) {
                        m.push({to, capture: true});
                    } else if (isSquareAttacked(board, to, opp)) {
                        m.push({to, sacrifice: true});
                    }
                    break;
                }
                nf += df; nr += dr;
            }
        }
        return m;
    }
}

class Knight extends Piece {
    constructor(c) { super('n', c); }
    getMoves(board, from, opp, movedFlags) {
        const m = [];
        const {file, rank} = coordToIndex(from);
        for (const [df, dr] of [[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]]) {
            const nf = file + df, nr = rank + dr;
            if (isOnBoard(nf, nr)) {
                const to = indexToCoord(nf, nr);
                if (!board[to]) {
                    m.push({to});
                } else {
                    const tc = getColor(board[to]);
                    if (tc !== this.color) {
                        m.push({to, capture: true});
                    } else if (isSquareAttacked(board, to, opp)) {
                        m.push({to, sacrifice: true});
                    }
                }
            }
        }
        return m;
    }
}

class Bishop extends Piece {
    constructor(c) { super('b', c); }
    getMoves(board, from, opp, movedFlags) {
        return this._slide(board, from, [[1,1],[1,-1],[-1,1],[-1,-1]], opp);
    }
    _slide(board, from, dirs, opp) {
        const m = [];
        const {file, rank} = coordToIndex(from);
        for (const [df, dr] of dirs) {
            let nf = file + df, nr = rank + dr;
            while (isOnBoard(nf, nr)) {
                const to = indexToCoord(nf, nr);
                if (!board[to]) {
                    m.push({to});
                } else {
                    const tc = getColor(board[to]);
                    if (tc !== this.color) {
                        m.push({to, capture: true});
                    } else if (isSquareAttacked(board, to, opp)) {
                        m.push({to, sacrifice: true});
                    }
                    break;
                }
                nf += df; nr += dr;
            }
        }
        return m;
    }
}

class Queen extends Piece {
    constructor(c) { super('q', c); }
    getMoves(board, from, opp, movedFlags) {
        return [
            ...new Rook(this.color).getMoves(board, from, opp, movedFlags),
            ...new Bishop(this.color).getMoves(board, from, opp, movedFlags)
        ];
    }
}

class King extends Piece {
    constructor(c) { super('k', c); }
    getMoves(board, from, opp, movedFlags) {
        const m = [];
        const {file, rank} = coordToIndex(from);
        
        for (const [df, dr] of [[0,1],[0,-1],[1,0],[-1,0],[1,1],[1,-1],[-1,1],[-1,-1]]) {
            const nf = file + df, nr = rank + dr;
            if (isOnBoard(nf, nr)) {
                const to = indexToCoord(nf, nr);
                if (this._pawnBlockRule(board, to, opp)) continue;
                const target = board[to];
                if (!target) {
                    m.push({to});
                } else if (getColor(target) === this.color) {
                    continue;
                } else {
                    if (getType(target) === 'k') continue;
                    m.push({to, capture: true});
                }
            }
        }
        if (!movedFlags.has(from) && !isSquareAttacked(board, from, opp)) {
            m.push(...this._castle(board, from, opp, movedFlags));
        }
        return m;
    }
    
    _pawnBlockRule(board, to, oppColor) {
        const { file: tf, rank: tr } = coordToIndex(to);
        const pawnDir = oppColor === 'white' ? 1 : -1;
        const startRank = oppColor === 'white' ? 1 : 6;

        const checkSquare = (r) => {
            if (!isOnBoard(tf, r)) return false;
            const p = board[indexToCoord(tf, r)];
            if (p && getType(p) === 'p' && getColor(p) === oppColor) {
                const isLight = (tf + tr) % 2 !== 0;
                const isWhiteKing = this.color === 'white';
                return !((isLight && isWhiteKing) || (!isLight && !isWhiteKing));
            }
            return false;
        };

        if (checkSquare(tr - pawnDir)) return true;
        if (checkSquare(tr - 2 * pawnDir) && (tr - 2 * pawnDir) === startRank) return true;
        return false;
    }

    _castle(board, from, opp, movedFlags) {
        const m = [];
        const {rank} = coordToIndex(from);
        const c = this.color, br = c === 'white' ? 0 : 7;
        if (rank !== br) return m;
        
        if (!movedFlags.has(`h${br+1}`) && !board[`f${br+1}`] && !board[`g${br+1}`] && 
            board[`h${br+1}`] && getType(board[`h${br+1}`]) === 'r' && getColor(board[`h${br+1}`]) === c &&
            !isSquareAttacked(board, from, opp) && 
            !isSquareAttacked(board, `f${br+1}`, opp) && 
            !isSquareAttacked(board, `g${br+1}`, opp)) {
            m.push({to: `g${br+1}`, special: 'castle-short'});
        }
        if (!movedFlags.has(`a${br+1}`) && !board[`b${br+1}`] && !board[`c${br+1}`] && !board[`d${br+1}`] && 
            board[`a${br+1}`] && getType(board[`a${br+1}`]) === 'r' && getColor(board[`a${br+1}`]) === c &&
            !isSquareAttacked(board, from, opp) && 
            !isSquareAttacked(board, `c${br+1}`, opp) && 
            !isSquareAttacked(board, `d${br+1}`, opp)) {
            m.push({to: `c${br+1}`, special: 'castle-long'});
        }
        return m;
    }
}

function createPiece(char) {
    if (!char) return null;
    const c = char === char.toUpperCase() ? 'white' : 'black';
    const t = char.toLowerCase();
    const map = {p: Pawn, r: Rook, n: Knight, b: Bishop, q: Queen, k: King};
    return map[t] ? new map[t](c) : null;
}

class ChessGame {
    constructor() {
        this.board = {};
        this.currentTurn = 'white';
        this.selected = null;
        this.validMoves = [];
        this.whiteMove = null;
        this.blackMove = null;
        this.history = [];
        this.over = false;
        this.promotion = null;
        this.origFill = null;
        this.movedFlags = new Set();
        this._init();
        this._bind();
    }

    _init() {
        this.board = {
            a8:'r',b8:'n',c8:'b',d8:'q',e8:'k',f8:'b',g8:'n',h8:'r',
            a7:'p',b7:'p',c7:'p',d7:'p',e7:'p',f7:'p',g7:'p',h7:'p',
            a1:'R',b1:'N',c1:'B',d1:'Q',e1:'K',f1:'B',g1:'N',h1:'R',
            a2:'P',b2:'P',c2:'P',d2:'P',e2:'P',f2:'P',g2:'P',h2:'P'
        };
        this.history = [];
    }

    _bind() {
        document.getElementById('chessboard')?.addEventListener('click', (e) => {
            const cell = e.target.closest('td');
            if (cell && cell.id) this._onCell(e);
        });

        const btn = document.getElementById('button-sending-move');
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this._handleForm();
            }, true);
        }
        
        ['choosing-cell', 'cell-selection'].forEach(id => {
            const inp = document.getElementById(id);
            if (inp) {
                inp.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        this._handleForm();
                    }
                }, true);
            }
        });

        document.querySelectorAll('.choosing-figure_box').forEach((b, i) => {
            b.addEventListener('click', () => this._onPromote(i));
        });
        
        ['restart-button', 'restart-game'].forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.reset();
                }, true);
            }
        });
    }

    _onCell(e) {
        if (this.over || this.promotion) return;
        const cell = e.target.closest('td');
        const coord = cell?.id;
        if (!coord) return;

        if (this.selected?.from === coord) { this._clear(); return; }
        if (this.selected && this.validMoves.some(m => m.to === coord)) { this._make(this.selected.from, coord); return; }

        const pc = this.board[coord];
        if (pc) {
            const p = createPiece(pc);
            if (p?.color === this.currentTurn) this._select(coord, p);
        } else this._clear();
    }

    _select(coord, piece) {
        this._clear();
        this.selected = { from: coord, piece };
        const cell = document.getElementById(coord);
        if (cell) {
            cell.classList.add('cell-checked');
            const svg = cell.querySelector('.chess-piece');
            if (svg) { this.origFill = svg.style.fill; svg.style.fill = SELECTED_COLOR; }
        }

        const opp = this.currentTurn === 'white' ? 'black' : 'white';
        const kingCoord = this._findKing(this.currentTurn);
        const kingInCheck = kingCoord && isSquareAttacked(this.board, kingCoord, opp);
        
        this.validMoves = piece.getMoves(this.board, coord, opp, this.movedFlags)
            .filter(m => {
                if (this.board[m.to] && getType(this.board[m.to]) === 'k') return false;
                if (piece.type === 'k') {
                    return !isSquareAttacked(this.board, m.to, opp, this.selected.from);
                }
                if (!kingInCheck) {
                    const tb = cloneBoard(this.board);
                    delete tb[coord];
                    tb[m.to] = piece.toString();
                    if (isSquareAttacked(tb, kingCoord, opp)) return false;
                }
                return true;
            });
        this.validMoves.forEach(m => this._dot(m.to));
    }

    _clear() {
        if (this.selected) {
            const cell = document.getElementById(this.selected.from);
            if (cell) {
                cell.classList.remove('cell-checked');
                const svg = cell.querySelector('.chess-piece');
                if (svg) svg.style.fill = this.origFill || '';
            }
        }
        document.querySelectorAll('.valid-move-dot').forEach(d => d.remove());
        this.selected = null; this.validMoves = []; this.origFill = null;
    }

    _dot(coord) {
        const cell = document.getElementById(coord);
        if (!cell) return;
        if (getComputedStyle(cell).position === 'static') cell.style.position = 'relative';
        const d = document.createElement('div');
        d.className = 'valid-move-dot';
        d.style.cssText = `position:absolute;width:3vmin;height:3vmin;background:${VALID_MOVE_COLOR};border-radius:50%;pointer-events:none;z-index:10;top:50%;left:50%;transform:translate(-50%,-50%)`;
        cell.appendChild(d);
    }

    _findKing(color) {
        const kc = color === 'white' ? 'K' : 'k';
        for (const c in this.board) if (this.board[c] === kc) return c;
        return null;
    }

    _make(from, to) {
        const pc = this.board[from], piece = createPiece(pc);
        const m = this.validMoves.find(x => x.to === to);
        if (!m) return;

        moveSound.currentTime = 0;
        moveSound.play().catch(() => {});

        const move = { from, to, piece: pc, color: piece.color, capture: m.capture, sacrifice: m.sacrifice, special: m.special };
        if (piece.color === 'white') { this.whiteMove = move; this.currentTurn = 'black'; }
        else { this.blackMove = move; this.currentTurn = 'white'; }

        if (piece.type === 'p' && (to[1] === '8' || to[1] === '1')) {
            this.promotion = { to, color: piece.color };
            document.getElementById('choosing-figure')?.classList.add('visible');
            this._clear(); this._uiTurn(); return;
        }

        this._clear(); this._uiTurn(); this._checkBoth();
    }

    _handleForm() {
        const f = document.getElementById('choosing-cell');
        const t = document.getElementById('cell-selection');
        if (!f || !t) return;
        const fromVal = f.value.trim().toLowerCase();
        const toVal = t.value.trim().toLowerCase();
        if (/^[a-h][1-8]$/.test(fromVal) && /^[a-h][1-8]$/.test(toVal)) {
            const pc = this.board[fromVal];
            if (pc) {
                const p = createPiece(pc);
                if (p && p.color === this.currentTurn) {
                    this._select(fromVal, p);
                    const valid = this.validMoves.find(m => m.to === toVal);
                    if (valid) this._make(fromVal, toVal);
                }
            }
        }
        setTimeout(() => { if(f) f.value = ''; if(t) t.value = ''; }, 0);
    }

    _onPromote(idx) {
        if (!this.promotion) return;
        const types = ['q','r','b','n'], {to, color} = this.promotion;
        const move = color === 'white' ? this.whiteMove : this.blackMove;
        if (move) { move.piece = color === 'white' ? types[idx].toUpperCase() : types[idx].toLowerCase(); move.special = 'promotion'; }
        this.promotion = null; document.getElementById('choosing-figure')?.classList.remove('visible');
        this._checkBoth();
    }

    _checkBoth() { if (this.whiteMove && this.blackMove) this._resolve(); }

    _resolve() {
        const nb = cloneBoard(this.board);
        delete nb[this.whiteMove.from];
        delete nb[this.blackMove.from];

        const place = (mv) => {
            const orig = this.board[mv.to];
            if (orig) delete nb[mv.to];
            nb[mv.to] = mv.piece;
        };

        if (this.whiteMove.to === this.blackMove.to) {
            let whiteWins;
            if (this.whiteMove.sacrifice) whiteWins = true;
            else if (this.blackMove.sacrifice) whiteWins = false;
            else {
                const {file, rank} = coordToIndex(this.whiteMove.to);
                const isDark = (file + rank) % 2 === 0;
                whiteWins = (this.whiteMove.color === 'white' && !isDark) || (this.whiteMove.color === 'black' && isDark);
            }
            place(whiteWins ? this.whiteMove : this.blackMove);
        } else {
            place(this.whiteMove);
            place(this.blackMove);
        }

        [this.whiteMove, this.blackMove].forEach(mv => {
            if (!mv?.special?.startsWith('castle')) return;
            const r = mv.to[1];
            if (mv.special === 'castle-short') { nb[`g${r}`] = mv.piece; nb[`f${r}`] = nb[`h${r}`]; delete nb[`h${r}`]; }
            else { nb[`c${r}`] = mv.piece; nb[`d${r}`] = nb[`a${r}`]; delete nb[`a${r}`]; }
        });

        this.board = nb;
        
        [this.whiteMove, this.blackMove].forEach(mv => {
            if (!mv) return;
            const type = getType(mv.piece);
            if (type === 'k' || type === 'r') {
                this.movedFlags.add(mv.from);
                if (mv.special === 'castle-short') this.movedFlags.add(`h${mv.to[1]}`);
                if (mv.special === 'castle-long') this.movedFlags.add(`a${mv.to[1]}`);
            }
        });

        let s = '';
        for (let r = 7; r >= 0; r--) for (let f = 0; f < 8; f++) s += this.board[indexToCoord(f,r)] || '.';
        this.history.push(s);
        
        const positionCount = this.history.filter(pos => pos === s).length;
        if (positionCount >= 3) {
            this.over = true;
            const d = document.getElementById('result-game');
            const t = document.getElementById('result-game_text');
            if (d && t) { t.textContent = 'Ничья'; d.classList.add('visible'); }
            this._render();
            return;
        }
        if (this.history.length > 100) this.history.shift();

        this.whiteMove = null; this.blackMove = null;
        if (!this.over) { this.currentTurn = 'white'; this._uiTurn(); }
        this._checkState(); this._render();
    }

    _kingHasEscape(color, oppColor) {
        const kingCoord = this._findKing(color);
        if (!kingCoord) return false;
        const kingPiece = createPiece(this.board[kingCoord]);
        if (!kingPiece || kingPiece.type !== 'k') return false;
        
        const kingMoves = kingPiece.getMoves(this.board, kingCoord, oppColor, this.movedFlags);
        for (const m of kingMoves) {
            if (!isSquareAttacked(this.board, m.to, oppColor, kingCoord)) return true;
        }
        
        for (const coord in this.board) {
            const piece = createPiece(this.board[coord]);
            if (!piece || piece.color !== color || piece.type === 'k') continue;
            const moves = piece.getMoves(this.board, coord, oppColor, this.movedFlags);
            for (const m of moves) {
                const tb = cloneBoard(this.board);
                delete tb[coord];
                tb[m.to] = piece.toString();
                if (!isSquareAttacked(tb, kingCoord, oppColor)) return true;
            }
        }
        return false;
    }

    _checkState() {
        const wk = this._findKing('white'), bk = this._findKing('black');
        const wc = wk && isSquareAttacked(this.board, wk, 'black');
        const bc = bk && isSquareAttacked(this.board, bk, 'white');
        
        let res = null;
        if (wc && !this._kingHasEscape('white', 'black')) res = 'black';
        if (bc && !this._kingHasEscape('black', 'white')) res = res === 'black' ? 'draw' : 'white';
        
        if (!res) {
            const wm = this._canMove('white'), bm = this._canMove('black');
            if (!wm && !wc) res = 'draw';
            else if (!bm && !bc) res = 'draw';
        }

        this._updateCheckUI(wk, wc, 'white');
        this._updateCheckUI(bk, bc, 'black');

        if (res) {
            this.over = true;
            const d = document.getElementById('result-game'), t = document.getElementById('result-game_text');
            if (d && t) { t.textContent = res === 'draw' ? 'Ничья' : `Победа ${res === 'white' ? 'белых' : 'чёрных'}`; d.classList.add('visible'); }
        }
    }

    _updateCheckUI(kingCoord, inCheck, kingColor) {
        if (!kingCoord) return;
        const cell = document.getElementById(kingCoord);
        if (!cell) return;
        const svg = cell.querySelector('.chess-piece');
        if (!svg) return;
        if (inCheck) {
            if (!svg.dataset.checkOrigFill) svg.dataset.checkOrigFill = svg.style.fill || '';
            svg.setAttribute('fill', CHECK_COLOR);
            svg.classList.remove('white', 'black');
            cell.classList.add('king-in-check');
        } else {
            if (svg.dataset.checkOrigFill !== undefined) {
                svg.style.fill = svg.dataset.checkOrigFill || '';
                delete svg.dataset.checkOrigFill;
            }
            svg.classList.add(kingColor);
            cell.classList.remove('king-in-check');
        }
    }

    _canMove(color) {
        const opp = color === 'white' ? 'black' : 'white', kp = this._findKing(color);
        const kingInCheck = kp && isSquareAttacked(this.board, kp, opp);
        
        for (const c in this.board) {
            const p = createPiece(this.board[c]);
            if (!p || p.color !== color) continue;
            for (const m of p.getMoves(this.board, c, opp, this.movedFlags)) {
                if (this.board[m.to] && getType(this.board[m.to]) === 'k') continue;
                if (p.type === 'k') {
                    if (!isSquareAttacked(this.board, m.to, opp, c)) return true;
                    continue;
                }
                if (!kingInCheck) {
                    const tb = cloneBoard(this.board);
                    delete tb[c];
                    tb[m.to] = p.toString();
                    if (isSquareAttacked(tb, kp, opp)) continue;
                }
                return true;
            }
        }
        return false;
    }

    _uiTurn() {
        const ind = document.getElementById('players-turn');
        if (ind) this.currentTurn === 'black' ? ind.classList.add('black') : ind.classList.remove('black');
    }

    _render() {
        document.querySelectorAll('#chessboard td').forEach(cell => {
            const coord = cell.id, wasSel = cell.classList.contains('cell-checked');
            cell.innerHTML = ''; if (!wasSel) cell.classList.remove('cell-checked');
            const pc = this.board[coord];
            if (pc) {
                const p = createPiece(pc); if (!p) return;
                const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svg.setAttribute('viewBox', '0 0 110 110');
                svg.classList.add('chess-piece', p.color === 'white' ? 'white' : 'black');
                if (PIECE_SVG_PATHS[p.type]) svg.innerHTML = PIECE_SVG_PATHS[p.type];
                if (wasSel && this.selected?.from === coord) svg.style.fill = SELECTED_COLOR;
                cell.appendChild(svg);
            }
        });
        const wk = this._findKing('white'), bk = this._findKing('black');
        const wc = wk && isSquareAttacked(this.board, wk, 'black');
        const bc = bk && isSquareAttacked(this.board, bk, 'white');
        this._updateCheckUI(wk, wc, 'white');
        this._updateCheckUI(bk, bc, 'black');
    }

    reset() {
        this._init(); this.currentTurn = 'white'; this.selected = null; this.validMoves = [];
        this.whiteMove = null; this.blackMove = null; this.history = []; this.over = false; this.promotion = null;
        this.origFill = null; this.movedFlags = new Set();
        this._render(); this._uiTurn();
        document.getElementById('result-game')?.classList.remove('visible');
        this._clear();
    }
}

let game = null;
document.addEventListener('DOMContentLoaded', () => { 
    game = new ChessGame(); 
    window.resetChessGame = () => game?.reset();
    window.game = game; 
});