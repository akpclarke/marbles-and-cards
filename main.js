import * as PIXI from './node_modules/pixi.js/dist/pixi.min.mjs';

let app;

window.onload = function() {
    app = new PIXI.Application(
        {
            width: 800,
            height: 600,
            backgroundColor: 0xAAAAAA
        }
    );

    document.body.appendChild(app.view);

    // Test comment
}