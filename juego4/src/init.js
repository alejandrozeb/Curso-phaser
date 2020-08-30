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
   /*  this.input.keyboard.on("keydown_RIGHT", () =>{
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
    }); */
    //con controles por default de phaser curosr predenterminada arriba bajo izq, der shit y espacio

    /* this.cursor = this.input.keyboard.createCursorKeys();
    console.log(this.cursor); */

    //personalizando teclas
    console.log(Phaser.Input.Keyboard.KeyCodes);
    this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
}
function update(time, delta){  
    //agregando movimiento con el cursor
    /* if(this.cursor.right.isDown){
        this.pajaro.x++;
    }else if(this.cursor.left.isDown){
        this.pajaro.x--;
    } */
    //con teclas personalizadas
    if(this.right.isDown){
        this.pajaro.x++;
    }else if(this.left.isDown){
        this.pajaro.x--;
    }
};