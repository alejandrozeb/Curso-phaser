const config = {
    width:320*2,
    height: 180*2,
    parent: "container",
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics:{
        default: "arcade",
        arcade: {
            gravity:{
                //y:500
            }
        }
    }
}
var game = new Phaser.Game(config);

function preload(){
    this.load.image("bird", "./assets/bird.png");
}
function create(){
    this.pajaro = this.physics.add.image(100,50,"bird");   //el origen de refrencia donde se pocisiona el pajaro, comienza en la parte superior izquierda.
    //tecla en escucha
    this.input.keyboard.on("keydown_RIGHT", () =>{
        // al presionar el botn a la derecha
        this.pajaro.x++;    //aumentamos posiciones en x
    });
    //todas las teclas que puden ser asigadas
    console.log(Phaser.Input.Keyboard.KeyCodes);

    //aumentando aceleracion
    this.input.keyboard.on("keydown_D", () =>{
        // al presionar el botn a la derecha
        this.pajaro.setAcceleration(100,0);    //aumentamos posiciones en x
    });
    //cuando se deje de presionar la tecla y se que quieto
    this.input.keyboard.on("keyup_D", () =>{
        // al presionar el botn a la derecha
        this.pajaro.setAcceleration(0,0);    //aumentamos posiciones en x
        //para que se dentega
        this.pajaro.setVelocity(0);
    });
}
function update(time, delta){  

};