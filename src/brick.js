export default class Brick {
    constructor(game, position){
        this.img = document.getElementById("imgBrick");

        this.game = game;

        this.position = position

        this.width = 200;
        this.height = 60;
    }

    update(){

    }

    draw(ctx){
        ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height );
    }
}