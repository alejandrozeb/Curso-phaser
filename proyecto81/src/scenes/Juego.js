import Angel from '../gameObjects/angel.js';
import Obstaculo from '../gameObjects/obstaculos.js';
class Juego extends Phaser.Scene {
    constructor() {
        super({key: 'Juego'});
    }

    init() {
        console.log('Scene: Juego');
    }

    create() {
        //fondo
        this.fondo=this.add.tileSprite(0,400,this.scale.width*2,this.scale.height*2, 'fondoNoche3');
        //personaje
        this.personaje = new Angel(this,300,100,"angel");
        //ladrillos
        this.ladrillos = this.physics.add.staticGroup();
        this.creaLadrillos(0,9);
        //
        //controles
        this.cursor = this.input.keyboard.createCursorKeys();
        this.cursor_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.cursor_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.cursor_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        console.log(this.cursor.keyboard)
    }

    update(time, delta) {
        this.fondo.tilePositionX +=1;
        //controles
        if(this.cursor.down.isDown){
            this.personaje.body.setVelocityX(300);
        }else if(this.cursor.up.isDown){
            this.personaje.body.setVelocityX(-300);    
        }else{
            this.personaje.body.setVelocityX(0);
        }
        //pala izquierda
        if(this.cursor_D.isDown){
            this.personaje.body.setVelocityX(300);
        }else if(this.cursor_A.isDown){
            this.personaje.body.setVelocityX(-300);
        }else{
            this.personaje.body.setVelocityX(0);
        }
        //salto
        if(
            this.cursor_W.isDown && this.personaje.body.touching.down
        ){
            this.personaje.body.setVelocityY(-300);
            console.log('entra');
        }
    }
    //crea ladrillos c es la distancia,l es el numero de ladrillos
    creaLadrillos(c,l){
        for(let i=0; i<=l;i++){    
            this.ladrillos = new Obstaculo(this,c,700,"ladrillo");    
            c=c+130;
        }
    }
}

export default Juego;
