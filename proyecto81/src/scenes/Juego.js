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
        this.creaLadrillos(0,700,9);
        //
        this.physics.add.collider(this.personaje, this.ladrillos);
        //controles
        this.cursor = this.input.keyboard.createCursorKeys();
        this.cursor_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.cursor_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.cursor_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        console.log(this.cursor.keyboard)
        //timer
        console.log(this.scene.scene.time.addEvent({delay:2000,callback: this.creartimer, loop: true}));
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
        //
        if(this.cursor_D.isDown){
            this.personaje.body.setVelocityX(300);
        }else if(this.cursor_A.isDown){
            this.personaje.body.setVelocityX(-300)
        }else{
            this.personaje.body.setVelocityX(0);
        }
        //salto
        if(
            this.cursor_W.isDown && this.personaje.body.blocked.down
        ){
            
            this.personaje.body.setVelocityY(-500);
        }

        //recicla ladrillos
        this.reciclaLadrillos(100,100);
    }
    //crea ladrillos x es la posicion,y es la posicion en y,l es el numero de ladrillos
    creaLadrillos(x,y,l){
        for(let i=0; i<=l;i++){    
            this.ladrillos = new Obstaculo(this,x,y,"ladrillo");    
            x=x+130;
        }
    }
    reciclaLadrillos(x,y){
                if(this.ladrillos.body.position.x < 1170){
                    console.log('afuera');
                    this.creaLadrillos(1170,700,9);
                }
    }
    creartimer(){
        console.log('timer');
    }
    //crea un ladrillo aleatorio
    crearLadrilloAle(){

    }
}

export default Juego;
