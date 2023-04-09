import * as PIXI from '../node_modules/pixi.js/dist/pixi.min.mjs';

let app;
const gameOverlay = document.getElementById('game-overlay');
const gameCanvas = document.getElementById('game-canvas');

window.onload = function() {

    // Setting the game display size, resolution, and background colour
    const renderer = new PIXI.Renderer({
        view: gameCanvas,
        width: window.innerWidth,
        height: window.innerHeight,
        resolution: 1,
        autoDensity: true,
        autoResize: true,
        backgroundColor: 0xBBC8E1
    });

    console.log("window inner width: " + window.innerWidth);
    console.log("window inner height: " + window.innerHeight);
    console.log("device pixel ratio: " + devicePixelRatio);

    const stage = new PIXI.Container();

    // Creating the game board and adding it to the stage
    const texture = PIXI.Texture.from("../resources/game_board.png");
    const img = new PIXI.Sprite(texture);
    img.width = renderer.height / 2;
    img.height = renderer.height / 2;
    img.x = renderer.width / 2;
    img.y = renderer.height / 2;
    img.anchor.x = 0.5;
    img.anchor.y = 0.5;
    stage.addChild(img);

    const ticker = new PIXI.Ticker();
    ticker.add(animate);
    ticker.start();

    // Main game loop
    function animate() {
        renderer.render(stage);
    }

}