/**
 * Created by Romain on 29/04/2017.
 */
var game = {




    //-------------------------------GRID INITIALISATION
    grid: [],

    setGrid: function (x, y, p) {
        console.log(x, y, p)
        this.grid[x, y] = p;
    },

    initGrid: function (gridSize) {
        this.grid = [];

        for( var i = 0; i < gridSize; i++ ) {

            this.grid[i] = [];

            for ( var j = 0; j < gridSize; j++) {
                this.grid[i][j] = 0;
            }
        }
    },




    //-------------------------------PLAYERS INITIALISATION
    players: [],

    setPlayers: function(players){

        players.forEach(function (el, index) {

            game.players.push({

                id: index,

                name: el,

                isAllowToPlay: false,

                getName: function(){
                    return el;
                }

            });
        });
        game.players[0].isAllowToPlay = true;
        return play();
    },

    initPlayer: function () {
        game.setPlayers(window.totalPlayers);
    }
};