/**
 * Created by Romain on 28/04/2017.
 */

function f(){

    var gridSizeChoice = document.getElementById('grid-size');
    var powerSizeChoice = document.getElementById('power-size');

    var gridSizeOpts = undefined;
    var powerSizeOpts = undefined;


    for (var i = 5; i < 15; i++) {
        gridSizeOpts = document.createElement('option');
            gridSizeOpts.value = i;
            gridSizeOpts.textContent = '(' + i + 'x' + (i + 1) + ')';

        powerSizeOpts = document.createElement('option');
            powerSizeOpts.value = i;
            powerSizeOpts.textContent = i;


        gridSizeChoice.appendChild(gridSizeOpts);
        powerSizeChoice.appendChild(powerSizeOpts);
    }


}


window.addEventListener('load', f);
