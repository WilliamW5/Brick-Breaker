import Paddle from './paddle.js';
import InputHandler from './input.js'
import Ball from './ball.js'
import Brick from './brick.js'
import { buildLevel, level1 } from './levels.js';

export default class Game {

    constructor(gameWidth, gameHeight){
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;

    }

    start(){
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);

        let bricks = buildLevel(this, level1);

        this.gameObjects = [
            this.ball,
            this.paddle,
            ...bricks
        ];

        new InputHandler(this.paddle);
    }

    update(deltaTime){
        /*
        this.paddle.update(deltaTime);
        this.ball.update(deltaTime);
        */

        // For each object in the array, it uses it's update function
        this.gameObjects.forEach((object) => object.update(deltaTime));
    }

    draw(ctx){
        /*
        this.paddle.draw(ctx);
        this.ball.draw(ctx);
        */
       
        // For each object in the array, it uses it's draw function
        this.gameObjects.forEach((object) => object.draw(ctx));
    }

}