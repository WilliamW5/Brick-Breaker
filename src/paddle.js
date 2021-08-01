export default class Paddle {
    
    constructor(gameWidth, gameHeight) {
        this.width = 150;
        this.height = 30;
  
        //* Position on Canvas
        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10
        };
    }
  
    draw(ctx) {
        ctx.fillStyle = '#00f'
        ctx.fillRect(this.position.x, this.position.y , this.width, this.height);
    }

    //* deltaTime(dt) how much time has gone by since it has been updated (Change of Time)
    update(deltaTime) {
        if(!deltaTime) {
            //* Can't divide by 0, so return
            return;
        }
        this.position.x += 5 / deltaTime;
    }
  }