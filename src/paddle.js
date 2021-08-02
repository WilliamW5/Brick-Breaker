export default class Paddle {
    
    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.width = 150;
        this.height = 30;

        this.maxSpeed = 10;
        this.speed = 0;

        this.borderFluff = 3;
  
        //* Position on Canvas
        this.position = {
            x: game.gameWidth / 2 - this.width / 2,
            y: game.gameHeight - this.height - 10
        };
    }
    
    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = +this.maxSpeed
    }

    stop() {
        this.speed = 0;
    }
  
    draw(ctx) {
        ctx.fillStyle = '#00f'
        ctx.fillRect(this.position.x, this.position.y , this.width, this.height);
    }

    //* deltaTime(dt) how much time has gone by since it has been updated (Change of Time)
    update(deltaTime) {
        this.position.x += this.speed;

        if(this.position.x < this.borderFluff ){
            this.position.x = this.borderFluff
        }

        if(this.position.x + this.width > this.gameWidth){
            this.position.x = this.gameWidth - this.width - this.borderFluff;
        }

    }
  }