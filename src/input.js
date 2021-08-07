import game from "./game.js";

export default class InputHandler {
    constructor(paddle, game){
        document.addEventListener('keydown', (event) =>{
            //alert(event.keyCode); returns the button pressed

            // maps the key to the keyCode value
            switch(event.keyCode){
                case 37:
                    paddle.moveLeft();
                    break;

                case 39:
                    paddle.moveRight();
                    break;

                case 27:
                    game.togglePause();
                    break;

                case 32:
                    game.start();
                    break;
            }
        });

        document.addEventListener('keyup', (event) =>{
            //alert(event.keyCode); returns the button pressed

            // maps the key to the keyCode value
            switch(event.keyCode){
                case 37:
                    // Prevents studdering of paddle
                    if(paddle.speed < 0){
                        paddle.stop();
                    }
                    break;

                case 39:
                    // Prevents studdering of paddle
                    if(paddle.speed > 0){
                        paddle.stop();
                    }
                    break;
            }
        });
    }
};