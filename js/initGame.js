/**
 * Created by Romain on 28/04/2017.
 */
function initGame(gSize, pSize, pIn) {

    window.totalPlayers = [];

    while( pIn > window.totalPlayers.length) {
        let player = prompt('Nom du joueur ' + ( window.totalPlayers.length + 1 ) + ' : ');
        window.totalPlayers.push(player);
        console.log(pIn)
        if ( pIn == 1 ) window.totalPlayers.push('Bot');
    }

    createDomGame(gSize, pSize, pIn);

}

function createDomGame(gSize = false, pSize = false, pIn = false) {

    if ( !gSize || !pSize || !pIn ) {
        var domCell = document.getElementsByClassName('cell-game');
        var gSize = Math.sqrt(domCell.length);
        var cellSize = document.getElementById('game-container').clientWidth / ( parseInt(gSize) + 1) + 'px';
        var cpt = 0;
    } else {

        var domGrid = document.getElementById('grid-container');
        var gRow = undefined;
        var gCell = undefined;
        var cellSize = document.getElementById('game-container').clientWidth / ( parseInt(gSize) + 1) + 'px';
    }

    for (let i = 0; i < gSize; i++) {

        if ( gSize && pSize && pIn ) gRow = document.createElement('tr');

        for (let i = 0; i < gSize; i++) {

            if ( gSize && pSize && pIn ) {

                gCell = document.createElement('td');
                gCell.id = 'cell_' + document.getElementsByTagName('tr').length + '-' + i;
                gCell.className = 'cell-game';
                gCell.style.width = gCell.style.height = cellSize;
                gCell.textContent = gSize;

                gCell.addEventListener('click', placeCell);
                gRow.appendChild(gCell);
            }

            else {
                domCell[cpt].style.width = domCell[cpt].style.height = cellSize;
                cpt++;
            }

        }
        if ( gSize && pSize && pIn ) domGrid.appendChild(gRow);

    }

}

window.addEventListener('resize', createDomGame);