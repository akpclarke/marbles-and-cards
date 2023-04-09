import * as PIXI from './node_modules/pixi.js/dist/pixi.min.mjs';

let app;
const gameCanvas = document.getElementById('game-canvas');

window.onload = function() {

    app = new PIXI.Application(
        {
            view: gameCanvas,
            width: gameCanvas.width,
            height: gameCanvas.height,
            backgroundColor: 0xAAAAAA
        }
    );

}