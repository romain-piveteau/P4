/**
 * Created by Romain on 29/04/2017.
 */

function play() {



    game.checkEnd = function () {

        var countP1Hor = 0;
        var countP2Hor = 0;
        var countP1Ver = 0;
        var countP2Ver = 0;
        var countP1Diag = 1;
        var countP2Diag = 1;
        var endGame = true;

        game.grid.forEach(function (el, index) {

            //------------------------------------- BEGIN BOTTOM-RIGHT DIAG DETECT GAME OVER

            for ( let i = 0; i < el.length; i++ ) {

                if ( el[i] !== 0 ) {

                    let oldIndex = index;
                    let oldI = i;

                    while ( i + 1 < game.grid.length && index + 1 < game.grid.length && game.grid[index + 1][i + 1] === 1 ) {

                        countP1Diag++;
                        index++;
                        i++;

                        if ( countP1Diag >= window.pSize ) {
                            window.pSize = ( countP1Diag > countP2Diag ) ? game.players[0].name : game.players[1].name;
                            game.over = true;
                            break;

                        }
                    }

                    i = oldI;
                    index = oldIndex;

                    while ( i + 1 < game.grid.length && index + 1 < game.grid.length && game.grid[index + 1][i + 1] === 2 ) {

                        countP2Diag++;
                        index++;
                        i++;


                        if ( countP2Diag >= window.pSize ) {
                            window.pSize = ( countP1Diag > countP2Diag ) ? game.players[0].name : game.players[1].name;
                            game.over = true;
                            break;
                        }
                    }

                    i = oldI;
                    index = oldIndex;
                    countP1Diag = 1;
                    countP2Diag = 1;

                }

                game.grid.forEach(function (el, index) {
                    for ( let i = 0; i < el.length; i++ ) {
                        if ( game.grid[index][i] === 0 ) endGame = false;
                    }
                });

                if ( endGame ) {
                    window.pSize = 'Egalite';
                    return false;
                }
            }




            //------------------------------------- END BOTTOM-RIGHT DIAG DETECT GAME OVER

            if ( game.over ) return ( isNaN(window.pSize) );

            //------------------------------------- BEGIN BOTTOM-LEFT DIAG DETECT GAME OVER
            for ( let i = 0; i < el.length; i++ ) {

                if ( el[i] !== 0 ) {

                    let oldIndex = index;
                    let oldI = i;

                    while ( i > 0 && index + 1 < game.grid.length && game.grid[index + 1][i - 1] === 1) {

                        countP1Diag++;
                        index++;
                        i--;

                        if ( countP1Diag >= window.pSize ) {
                            window.pSize = ( countP1Diag > countP2Diag ) ? game.players[0].name : game.players[1].name;
                            game.over = true;
                            break;

                        }
                    }

                    i = oldI;
                    index = oldIndex;

                    while ( i > 0 && index + 1 < game.grid.length && game.grid[index + 1][i - 1] === 2 ) {

                        countP2Diag++;
                        index++;
                        i--;

                        if ( countP2Diag >= window.pSize ) {
                            window.pSize = ( countP1Diag > countP2Diag ) ? game.players[0].name : game.players[1].name;
                            game.over = true;
                            break;

                        }

                    }

                    i = oldI;
                    index = oldIndex;
                    countP1Diag = 1;
                    countP2Diag = 1;

                }
            }
            //------------------------------------- END BOTTOM-LEFT DIAG DETECT GAME OVER

            if ( game.over ) return ( isNaN(window.pSize) );

            //------------------------------------- BEGIN DIAG DETECT GAME OVER

            //------------------------------------- BEGIN VERT & HORI DETECT GAME OVER
            for ( let i = 0; i < el.length - 1; i++ ) {

                countP1Hor = ( el[i] === 1 ) ? countP1Hor + 1 : 0;
                countP2Hor = ( el[i] === 2 ) ? countP2Hor + 1 : 0;

                countP1Ver = ( game.grid[i][index] === 1 ) ? countP1Ver + 1 : 0;
                countP2Ver = ( game.grid[i][index] === 2 ) ? countP2Ver + 1 : 0;

                if ( countP1Ver >= window.pSize || countP2Ver >= window.pSize ) {
                    window.pSize = ( countP1Ver > countP2Ver ) ? game.players[0].name : game.players[1].name;
                    game.over = true;
                    break;
                }

            }
            //------------------------------------- END VERT & HORI DETECT GAME OVER

            if ( countP1Hor >= window.pSize || countP2Hor >= window.pSize ) {
                window.pSize = ( countP1Hor > countP2Hor ) ? game.players[0].name : game.players[1].name;
                game.over = true;
            }
            else countP1Hor = countP2Hor = countP1Ver = countP2Ver = 0;
            console.log(el.length, index)

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

    if ( !game.over && !game.checkEnd() ) {

        if (game.players[0].isAllowToPlay) game.players[0].play(this);
        else if (game.players[1].isAllowToPlay) game.players[1].play(this);
    }

    if ( game.over ) {
        ( window.pSize !== 'Egalite' ) ? alert(window.pSize + ' a remporte la partie'): alert('Egalite');
    }

    game.checkEnd();
    game.setGravity();
    game.checkEnd();


    //------------------------------------------DEBUG DISPLAY GRID
    console.log('--------------------------')
    game.grid.forEach(function (el, index) {
       console.log(el);
    });
}
