export default class InputHandler {
    constructor(){
        document.addEventListener('keydown', (event) =>{
            //alert(event.keyCode);

            // maps the key to the keyCode value
            switch(event.keyCode){
                case 37:
                    alert('move left')
                    break;

                case 38:
                    alert('move up')
                    break;

                case 39:
                    alert('move right')
                    break;

                case 40:
                    alert('move down')
                    break;
            }
        });
    }
};