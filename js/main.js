document.addEventListener('DOMContentLoaded', () => {

const pieceSVG = {
    'q': '<path d="M88.54,31.46C87.63,30.56,86.38,30,85,30c-2.76,0-5,2.24-5,5v5H70v-5c0-2.76-2.24-5-5-5h-5V15 c0-1.38-0.56-2.63-1.46-3.54C57.63,10.56,56.38,10,55,10c-2.76,0-5,2.24-5,5v15h-5c-2.76,0-5,2.24-5,5v5H30v-5 c0-1.38-0.56-2.63-1.46-3.54C27.63,30.56,26.38,30,25,30c-2.76,0-5,2.24-5,5v20c0,2.76,2.24,5,5,5h5v5c0,2.76,2.24,5,5,5h5v10h-5 c-2.76,0-5,2.24-5,5v5h-5c-1.38,0-2.63,0.56-3.54,1.46C20.56,92.37,20,93.62,20,95c0,2.76,2.24,5,5,5h60 c1.38,0,2.63-0.56,3.54-1.46C89.44,97.63,90,96.38,90,95c0-2.76-2.24-5-5-5h-5v-5c0-2.76-2.24-5-5-5h-5V70h5c2.76,0,5-2.24,5-5v-5 h5c2.76,0,5-2.24,5-5V35C90,33.62,89.44,32.37,88.54,31.46z M60,40v10H50V40H60z"/>',
    'n': '<path d="M90,35v40c0,2.76-2.24,5-5,5h-5v10h5c2.76,0,5,2.24,5,5c0,1.38-0.56,2.63-1.46,3.54 C87.63,99.44,86.38,100,85,100H25c-2.76,0-5-2.24-5-5c0-1.38,0.56-2.63,1.46-3.54C22.37,90.56,23.62,90,25,90h5v-5 c0-2.76,2.24-5,5-5h5v-5c0-2.76,2.24-5,5-5h5V60H35c-2.76,0-5-2.24-5-5V45c0-2.76,2.24-5,5-5h5v-5c0-2.76,2.24-5,5-5h5V15 c0-2.76,2.24-5,5-5c1.38,0,2.63,0.56,3.54,1.46C59.44,12.37,60,13.62,60,15v5h10v-5c0-2.76,2.24-5,5-5c1.38,0,2.63,0.56,3.54,1.46 C79.44,12.37,80,13.62,80,15v15h5C87.76,30,90,32.24,90,35z"/>',
    'r': '<path d="M90,95c0,1.38-0.56,2.63-1.46,3.54C87.63,99.44,86.38,100,85,100H25c-2.76,0-5-2.24-5-5c0-1.38,0.56-2.63,1.46-3.54C22.37,90.56,23.62,90,25,90h5v-5c0-2.76,2.24-5,5-5h5V50h-5c-2.76,0-5-2.24-5-5V25c0-2.76,2.24-5,5-5c1.38,0,2.63,0.56,3.54,1.46C39.44,22.37,40,23.62,40,25v5h10v-5c0-2.76,2.24-5,5-5c1.38,0,2.63,0.56,3.54,1.46C59.44,22.37,60,23.62,60,25v5h10v-5c0-2.76,2.24-5,5-5c1.38,0,2.63,0.56,3.54,1.46C79.44,22.37,80,23.62,80,25v20c0,2.76-2.24,5-5,5h-5v30h5c2.76,0,5,2.24,5,5v5h5C87.76,90,90,92.24,90,95z"/>',
    'b': '<path d="M90,95c0,1.38-0.56,2.63-1.46,3.54C87.63,99.44,86.38,100,85,100H25c-2.76,0-5-2.24-5-5c0-1.38,0.56-2.63,1.46-3.54C22.37,90.56,23.62,90,25,90h5v-5c0-2.76,2.24-5,5-5h5V70h-5c-2.76,0-5-2.24-5-5V45c0-2.76,2.24-5,5-5c1.38,0,2.63,0.56,3.54,1.46C39.44,42.37,40,43.62,40,45v5h10V40h-5c-2.76,0-5-2.24-5-5c0-1.38,0.56-2.63,1.46-3.54C42.37,30.56,43.62,30,45,30h5v-5c0-2.76,2.24-5,5-5c1.38,0,2.63,0.56,3.54,1.46C59.44,22.37,60,23.62,60,25v5h5c2.76,0,5,2.24,5,5v5h5c2.76,0,5,2.24,5,5v20c0,2.76-2.24,5-5,5h-5v10h5c2.76,0,5,2.24,5,5v5h5C87.76,90,90,92.24,90,95z"/>',
    'k': '<path d="M90,45v10c0,2.76-2.24,5-5,5h-5V50H60v10h20v5c0,2.76-2.24,5-5,5h-5v10h5c2.76,0,5,2.24,5,5v5h5 c2.76,0,5,2.24,5,5c0,1.38-0.56,2.63-1.46,3.54C87.63,99.44,86.38,100,85,100H25c-2.76,0-5-2.24-5-5c0-1.38,0.56-2.63,1.46-3.54 C22.37,90.56,23.62,90,25,90h5v-5c0-2.76,2.24-5,5-5h5V70h-5c-2.76,0-5-2.24-5-5v-5h20V50H30v10h-5c-2.76,0-5-2.24-5-5V45 c0-2.76,2.24-5,5-5h25V30h-5c-2.76,0-5-2.24-5-5c0-1.38,0.56-2.63,1.46-3.54C42.37,20.56,43.62,20,45,20h5v-5c0-2.76,2.24-5,5-5 c1.38,0,2.63,0.56,3.54,1.46C59.44,12.37,60,13.62,60,15v5h5c2.76,0,5,2.24,5,5c0,1.38-0.56,2.63-1.46,3.54 C67.63,29.44,66.38,30,65,30h-5v10h25C87.76,40,90,42.24,90,45z"/>',
    'p': '<path d="M90,95c0,1.38-0.56,2.63-1.46,3.54C87.63,99.44,86.38,100,85,100H25c-2.76,0-5-2.24-5-5 c0-1.38,0.56-2.63,1.46-3.54C22.37,90.56,23.62,90,25,90h5v-5c0-2.76,2.24-5,5-5h5V65c0-2.76,2.24-5,5-5h5V50h-5 c-2.76,0-5-2.24-5-5c0-1.38,0.56-2.63,1.46-3.54C42.37,40.56,43.62,40,45,40h5v-5c0-2.76,2.24-5,5-5c1.38,0,2.63,0.56,3.54,1.46 C59.44,32.37,60,33.62,60,35v5h5c2.76,0,5,2.24,5,5c0,1.38-0.56,2.63-1.46,3.54C67.63,49.44,66.38,50,65,50h-5v10h5 c2.76,0,5,2.24,5,5v15h5c2.76,0,5,2.24,5,5v5h5C87.76,90,90,92.24,90,95z"/>'
};


    const initialBoard = {
        a8: 'r', b8: 'n', c8: 'b', d8: 'q', e8: 'k', f8: 'b', g8: 'n', h8: 'r',
        a7: 'p', b7: 'p', c7: 'p', d7: 'p', e7: 'p', f7: 'p', g7: 'p', h7: 'p',

        a1: 'R', b1: 'N', c1: 'B', d1: 'Q', e1: 'K', f1: 'B', g1: 'N', h1: 'R',
        a2: 'P', b2: 'P', c2: 'P', d2: 'P', e2: 'P', f2: 'P', g2: 'P', h2: 'P'
    };

    renderPieces();

    function resetGame() {
        const cells = document.querySelectorAll('#chessboard td');

        cells.forEach(cell => {
            cell.className = ''; 
        });

        for (const [cellId, pieceClass] of Object.entries(initialBoard)) {
            const cell = document.getElementById(cellId);
            if (cell) {
                cell.classList.add(pieceClass);
            }
        }

        renderPieces();

        const resultGame = document.getElementById('result-game');
        
        if (resultGame) resultGame.classList.remove('visible');
        
        const inputFrom = document.getElementById('choosing-cell');
        const inputTo = document.getElementById('cell-selection');
        if(inputFrom) inputFrom.value = '';
        if(inputTo) inputTo.value = '';
    }

    const restartBtnSettings = document.getElementById('restart-button');
    const restartBtnResult = document.getElementById('restart-game');

    if (restartBtnSettings) {
        restartBtnSettings.addEventListener('click', resetGame);
    }
    
    if (restartBtnResult) {
        restartBtnResult.addEventListener('click', resetGame);
    }




function renderPieces() {
    const cells = document.querySelectorAll('#chessboard td');

    cells.forEach(cell => {
        cell.innerHTML = '';

        const pieceClass = Array.from(cell.classList).find(cls => 
            ['p','P','r','R','n','N','b','B','q','Q','k','K'].includes(cls)
        );

        if (pieceClass) {
            const isWhite = pieceClass === pieceClass.toUpperCase();
            const colorClass = isWhite ? 'white' : 'black';
            const pieceType = pieceClass.toLowerCase();

            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('viewBox', '0 0 110 110');
            svg.classList.add('chess-piece', colorClass);
            
            if (pieceSVG[pieceType]) {
                svg.innerHTML = pieceSVG[pieceType];
            }
            
            cell.appendChild(svg);
        }
    });
}

    const radios = document.querySelectorAll('input[name="opponent"]');

    function updateRadioStyles() {
        const allLabels = document.querySelectorAll('.radio-button');
        
        allLabels.forEach(label => {
            label.classList.remove('radio-button_checked');
        });

        const activeInput = document.querySelector('input[name="opponent"]:checked');
        
        if (activeInput) {
            activeInput.parentElement.classList.add('radio-button_checked');
        }
    }

    radios.forEach(radio => {
        radio.addEventListener('change', updateRadioStyles);
    });

    updateRadioStyles();

    function toggleRules() {
    const rulesBlock = document.getElementById('rules');
    const rulesIcon = document.getElementById('rules-icon');
    
    rulesIcon.classList.toggle('checked');
    rulesBlock.classList.toggle('visible');
}

    const rulesIcon = document.getElementById('rules-icon');
    if (rulesIcon) {
        rulesIcon.addEventListener('click', toggleRules);
    }

    const inputFrom = document.getElementById('choosing-cell');
    const inputTo = document.getElementById('cell-selection');
    const sendButton = document.getElementById('button-sending-move');

    function validateChessInput(event) {
        const input = event.target;
        let value = input.value.toUpperCase();

        if (value.length > 0) {
            if (!/[A-H]/.test(value[0])) {
                value = value.substring(1);
            }
        }
        if (value.length > 1) {
            if (!/[1-8]/.test(value[1])) {
                value = value[0];
            }
        }
        
        input.value = value;
    }

    [inputFrom, inputTo].forEach(input => {
        input.addEventListener('input', validateChessInput);

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                
                if (input === inputFrom) {
                    inputTo.focus();
                    inputTo.select();
                } else if (input === inputTo) {
                    sendButton.click();
                }
            }
        });

    });

    if (sendButton) {
        sendButton.addEventListener('click', () => {
            const from = inputFrom.value.toUpperCase();
            const to = inputTo.value.toUpperCase();
            
            if (/^[A-H][1-8]$/.test(from) && /^[A-H][1-8]$/.test(to)) {
                console.log(`Ход: ${from} -> ${to}`);
                
                inputFrom.value = '';
                inputTo.value = '';
                inputFrom.focus();
            }
        });
    }
  
});