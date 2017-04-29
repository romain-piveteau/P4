/**
 * Created by Romain on 28/04/2017.
 */
function f() {



    function validBtn(e) {

        var infosOpts = document.getElementsByClassName('info-options');
        var formElToHide = [
            document.getElementById('grid-size'),
            document.getElementById('power-size'),
            document.getElementById('players-in'),
            this
        ];

        let gridSize = formElToHide[0].value;
        let powerSize = formElToHide[1].value;
        let playersIn = formElToHide[2].value;

        if ( gridSize < powerSize ) {
            infosOpts[1].textContent = 'Taille de grille trop petite pour ca'
            infosOpts[1].style.color = 'red';
            return false;
        }

        for (var i = 0; i < infosOpts.length; i++) { formElToHide.push(infosOpts[i]); }
        formElToHide.forEach(function (el, index) { el.style.display = 'none'; });
        document.getElementById('game-options').style.height = '100px';

        initGame(gridSize, powerSize, playersIn);
        game.initGrid(gridSize);
    }

    //-------------------- ADD EVENT LISTENER
    document.getElementById('submitBtn').addEventListener('click', validBtn);
    document.getElementById('submitBtn').addEventListener('click', game.initPlayer);
}

window.addEventListener('load', f);
