/**
 * Created by Romain on 28/04/2017.
 */
function initGame(gSize, pSize, pIn) {

    window.totalPlayers = [];

    while( pIn > window.totalPlayers.length) {

        let player = prompt('Nom du joueur ' + ( window.totalPlayers.length + 1 ) + ' : ');
        while ( player.length < 3 ) player = prompt('Nom du joueur ' + ( window.totalPlayers.length + 1 ) + ' : ');
        window.totalPlayers.push(player);

        if ( pIn == 1 ) window.totalPlayers.push('Bot');
    }
    window.pSize = pSize;

    createDomGame(gSize, pSize, pIn);


    //-------------------------ONLY FOR MOBILE - DO NOT WORK FOR THE MOMENT
    // else {
    //
    //     var pPrompt = document.createElement('input');
    //     var pBtn = document.createElement('button');
    //     pBtn.textContent = 'Go';
    //     pBtn.onclick = function (e) {
    //
    //         window.totalPlayers.push(pPrompt.value);
    //         console.log(pPrompt.value)
    //         console.log(window.totalPlayers)
    //         if (window.totalPlayers > pIn) {
    //             this.remove();
    //             pPrompt.remove();
    //
    //             createDomGame(gSize, pSize, pIn);
    //         }
    //
    //     };
    //
    //     document.getElementById('grid-container').appendChild(pPrompt);
    //     document.getElementById('grid-container').appendChild(pBtn);
    // }

}

function createDomGame(gSize = false, pSize = false, pIn = false) {

    if ( !gSize || !pSize || !pIn ) {
        var domCell = document.getElementsByClassName('cell-game');
        var gSize = Math.sqrt(domCell.length);
        var tmpCellWidth = document.getElementById('game-container').clientWidth / ( parseInt(gSize) + 1) + 'px';
        var tmpCellHeight = document.getElementById('game-container').clientHeight / ( parseInt(gSize) + 1) + 'px';

        var cellSize = ( tmpCellWidth <= tmpCellHeight ) ? tmpCellWidth : tmpCellHeight;

        var cpt = 0;
    } else {

        var domGrid = document.getElementById('grid-container');
        var gRow = undefined;
        var gCell = undefined;
        var cellSize = document.getElementById('game-container').clientWidth / ( parseInt(gSize) + 1) + 'px';
    }

    for (let i = 0; i < gSize; i++) {

        if ( gSize && pSize && pIn ) gRow = document.createElement('tr');

        for (let i = 0; i <= gSize; i++) {

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