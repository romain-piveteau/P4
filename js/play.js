/**
 * Created by Romain on 29/04/2017.
 */

function play() {

    game.checkEnd = function () {

        var countP1Hor = 0;
        var countP2Hor = 0;
        var countP1Ver = 0;
        var countP2Ver = 0;

        game.grid.forEach(function (el, index) {

            for ( let i = 0; i < el.length; i++ ) {

                countP1Hor = ( el[i] === 1 ) ? countP1Hor + 1 : 0;
                countP2Hor = ( el[i] === 2 ) ? countP2Hor + 1 : 0;

                countP1Ver = ( game.grid[i][index] === 1 ) ? countP1Ver + 1 : 0;
                countP2Ver = ( game.grid[i][index] === 2 ) ? countP2Ver + 1 : 0;

                console.log(countP1Ver + ' --- ' + index + ' ---- ' + i + '  |')

                if ( countP1Ver >= window.pSize || countP2Ver >= window.pSize ) {
                    window.pSize = ( countP1Ver > countP2Ver ) ? game.players[0].name : game.players[1].name;
                    game.over = true;
                    break;
                }

            }

            if ( countP1Hor >= window.pSize || countP2Hor >= window.pSize ) {
                window.pSize = ( countP1Hor > countP2Hor ) ? game.players[0].name : game.players[1].name;
                game.over = true;
            }
            else countP1Hor = countP2Hor = countP1Ver = countP2Ver = 0;

        });

        return ( isNaN(window.pSize) );

    };



    game.players[0].play = function (e) {

        if ( this.isAllowToPlay && !e.status ) {
            e.style.backgroundColor = 'red';
            e.status = true;
            game.placeCell(e.id.split('_')[1].split('-')[0], e.id.split('-')[1], 1);
        } else return false;

        game.players[1].isAllowToPlay = true;
        game.over = game.checkEnd();
        return ( this.isAllowToPlay = !game.players[1].isAllowToPlay );
    };

    game.players[1].play = function (e) {

        if ( this.isAllowToPlay && !e.status ) {
            e.style.backgroundColor = 'yellow';
            e.status = true;
            game.placeCell(e.id.split('_')[1].split('-')[0], e.id.split('-')[1], 2);
        } else return false;

        game.players[0].isAllowToPlay = true;
        game.over = game.checkEnd();
        return ( this.isAllowToPlay = !game.players[0].isAllowToPlay );

    };


}



//------------------------------------CLICK ON CELL FUNCTION
function placeCell(e){
    // game.checkEnd();

    if ( !game.over ) {
        if (game.players[0].isAllowToPlay) game.players[0].play(this);
        else if (game.players[1].isAllowToPlay) game.players[1].play(this);
    }

    if ( game.over ) {
        alert(window.pSize + ' a rempote la partie');
    }


    //------------------------------------------DEBUG DISPLAY GRID
    console.log('--------------------------')
    game.grid.forEach(function (el, index) {
       console.log(el);
    });
}
