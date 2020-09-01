import Palas from '../gameObjects/palas.js';
class Scene_play extends Phaser.Scene{
    constructor(){
        super({key: "Scene_play"});
    }
    preload(){
        //ya usamos el bootloader como preload
    }
    create(){
        let center_width=this.sys.game.config.width/2;
        let center_height=this.sys.game.config.height/2;
        //separador
        this.add.image(center_width,center_height, "separador");
        //viendo las variables internas para ver el centro
       // console.log(this.sys.game.config.width);
       //palas
       //izquierda
       //this.izquierda = this.add.image(30,center_height,"izquierda");
       //creamos la pala con nuestra clase
        this.izquierda = new Palas(this,30,center_height, "izquierda");
       //derecha
       //this.derecha = this.add.image(this.sys.game.config.width-30,center_height,"derecha");
       //con la clase pala
       this.derecha = new Palas(this,this.sys.game.config.width-30,center_height,"derecha");
       //fisica del mundo que tenga rebote en los costados solo arriba y abajo
       this.physics.world.setBoundsCollision(false,false,true,true);
       //bola
       this.ball = this.physics.add.image(center_width,center_height,"ball");
        //añadiendo rebotes
        this.ball.setCollideWorldBounds(true);
        //rebota a la misma intencidad
        this.ball.setBounce(1);
       //agreando velocidad a la bola
       this.ball.setVelocityX(-100);

       //agregando fisicas
        //cuando choquen tiene que ejecutar una funcion
       this.physics.add.collider(this.ball, this.izquierda,this.chocaPala,null,this);
       this.physics.add.collider(this.ball, this.derecha,this.chocaPala,null,this);
        //controles
        //derecha
        this.cursor = this.input.keyboard.createCursorKeys();
        //izquierda
        this.cursor_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.cursor_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }
    update(){
        //cada vez que sale ingesa por centro
        if(this.ball.x <0 || this.ball.x > this.sys.game.config.width ){
            this.ball.setPosition(this.sys.game.config.width/2,this.sys.game.config.height/2);
        }
    }
    chocaPala(){
        //da un aleatorio en y 
        this.ball.setVelocityY(Phaser.Math.Between(-120,120));
    }
}
export default Scene_play;