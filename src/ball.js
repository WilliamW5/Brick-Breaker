import { detectCollision } from './collisionDetection.js'

export default class Ball {

    constructor(game){
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.img = document.getElementById("imgBall");

        this.game = game;

        this.speed = {
            x: 4,
            y: -2
        };
        this.position = {
            x: 10,
            y: 400
        };

        this.size = 16;
    }

    draw(ctx){
        ctx.drawImage(this.img, this.position.x, this.position.y, this.size, this.size );

    }

    update(deltaTime){
        console.log(this.game.paddle.position.x);
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        // Ball collision: left or right
        if(this.position.x + this.size > this.gameWidth || this.position.x < 0){
            this.speed.x = -this.speed.x
        };

        // Ball collision: top or bottom
        if(this.position.y + this.size > this.gameHeight || this.position.y < 0){
            this.speed.y = -this.speed.y
        };
        

        if (detectCollision(this, this.game.paddle)){
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;
        }
    }
}