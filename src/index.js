import Paddle from '../src/paddle.js';
import InputHandler from '../src/input.js'

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, 800, 600)

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

new InputHandler();

let lastTime = 0;


function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0, 0, 800, 600);
    paddle.update(deltaTime);
    paddle.draw(ctx);

    // gameloop and passes timestamp
    requestAnimationFrame(gameLoop);
}

gameLoop();