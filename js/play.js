/**
 * Created by Romain on 29/04/2017.
 */

function play() {

    game.players[0].play = function (e) {

        if ( this.isAllowToPlay && !e.status ) {
            e.style.backgroundColor = 'red';
            e.status = true;
            game.setGrid(e.id.split('_')[1].split('-')[0], e.id.split('-')[1], 1);
        } else return false;

        game.players[1].isAllowToPlay = true;
        return ( this.isAllowToPlay = !game.players[1].isAllowToPlay );

    };

    game.players[1].play = function (e) {

        if ( this.isAllowToPlay && !e.status ) {
            e.style.backgroundColor = 'yellow';
            e.status = true;
            game.setGrid(e.id.split('_')[1].split('-')[0], e.id.split('-')[1], 2);
        } else return false;

        game.players[0].isAllowToPlay = true;
        return ( this.isAllowToPlay = !game.players[0].isAllowToPlay );

    };


}



//------------------------------------CLICK ON CELL FUNCTION
function placeCell(e){
    console.log('placeCell has been called')
    if ( game.players[0].isAllowToPlay ) game.players[0].play(this);
    else if ( game.players[1].isAllowToPlay ) game.players[1].play(this);

    console.log(game.grid)
}
