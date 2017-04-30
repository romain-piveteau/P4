/**
 * Created by Romain on 30/04/2017.
 */


function gravity(){

    game.domGrid = document.getElementsByClassName('cell-game');


    game.setGravity = function() {

        var gOn = document.getElementsByName('gravity')[0].checked;

        if ( gOn ) {

            var hasMoved = false;
            var freeCell = undefined;
            var firstCell = undefined;

            game.grid.forEach(function (el, index) {

                for (let i = game.grid.length - 1; i >= 0; i--) {

                    if (game.grid[i][index + 1] == 0) {

                        freeCell = ( freeCell === undefined ) ? {
                                y: index + 1,
                                x: i,
                                p: game.grid[i][index + 1]
                            } : freeCell;
                    }

                    if (game.grid[i][index + 1]) {
                        firstCell = {
                            y: index + 1,
                            x: i,
                            p: game.grid[i][index + 1]
                        };
                    }

                    if (firstCell && freeCell && freeCell.x > firstCell.x) {

                        game.grid[freeCell.x][freeCell.y] = firstCell.p;
                        game.grid[firstCell.x][firstCell.y] = 0;

                        let domFreeCell = document.getElementById('cell_' + freeCell.x + '-' + freeCell.y);
                        let domFirstCell = document.getElementById('cell_' + firstCell.x + '-' + firstCell.y);
                        let oldColor = domFirstCell.style.backgroundColor;

                        domFirstCell.status = undefined;
                        domFreeCell.status = firstCell.p;

                        domFirstCell.style.backgroundColor = domFreeCell.style.backgroundColor;
                        domFreeCell.style.backgroundColor = oldColor;


                        freeCell.x = firstCell.x;
                        freeCell.y = firstCell.y;


                        hasMoved = true;
                    }

                }
                freeCell = firstCell = undefined;
            });
            //--------------------------------  SPECIAL REPLACEMENT CAUSE NEW SIZE X*(X +1) INSTEAD OF X*X


            for (let i = game.grid.length - 1; i >= 0; i--) {

                if (game.grid[i][0] == 0) {

                    freeCell = ( freeCell === undefined ) ? {
                            y: 0,
                            x: i,
                            p: game.grid[i][0]
                        } : freeCell;
                }

                if (game.grid[i][0]) {
                    firstCell = {
                        y: 0,
                        x: i,
                        p: game.grid[i][0]
                    };
                }

                if (firstCell && freeCell && freeCell.x > firstCell.x) {

                    game.grid[freeCell.x][freeCell.y] = firstCell.p;
                    game.grid[firstCell.x][firstCell.y] = 0;

                    let domFreeCell = document.getElementById('cell_' + freeCell.x + '-' + freeCell.y);
                    let domFirstCell = document.getElementById('cell_' + firstCell.x + '-' + firstCell.y);
                    let oldColor = domFirstCell.style.backgroundColor;

                    domFirstCell.status = undefined;
                    domFreeCell.status = firstCell.p;

                    domFirstCell.style.backgroundColor = domFreeCell.style.backgroundColor;
                    domFreeCell.style.backgroundColor = oldColor;


                    freeCell.x = firstCell.x;
                    freeCell.y = firstCell.y;


                    hasMoved = true;
                }

            }
            freeCell = firstCell = undefined;

            //--------------------------------  END OF SPECIAL REPLACEMENT

            if ( hasMoved ) game.setGravity();
            return game.checkEnd();
        }
    }


}
