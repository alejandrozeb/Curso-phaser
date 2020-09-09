import Angel from '../gameObjects/angel.js';
import Obstaculo from '../gameObjects/obstaculos.js';
import Ladrillo from '../gameObjects/ladrillo.js';
import Covidxes from '../gameObjects/covidxe.js';
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
        //enemigo
        this.enemigo = new Covidxes(this,1000,100,"covidxe");
        //ladrillos
        this.ladrillos = this.physics.add.staticGroup();
        this.creaLadrillos(0,700,9);
        //colisiones
        this.physics.add.collider(this.personaje, this.ladrillos,null,this);
        this.physics.add.collider(this.enemigo, this.personaje);
        //controles
        this.cursor = this.input.keyboard.createCursorKeys();
        this.cursor_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.cursor_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.cursor_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        //timer Math.floor(Math.random()*80)+420)  420
        this.scene.scene.time.addEvent({delay:11000,callback: () => {
            this.ladrillo =  new Ladrillo(this,1170,Math.floor(Math.random()*80)+420,"ladrillo");
            this.physics.add.collider(this.personaje, this.ladrillo);
        },loop: true,});
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
        }else if(this.cursor_W.isDown && this.personaje.body.touching.down){
            this.personaje.body.setVelocityY(-400);
        }
        //recicla ladrillos
        this.reciclaLadrillos(100,100);
        //personaje sale del juego
        if(this.personaje.body.position.x<-250){
            //escena gameover
            this.personaje.body.reset(100,100);
            //this.scene.start("Gameover");
        }
    }
    //crea ladrillos x es la posicion,y es la posicion en y,l es el numero de ladrillos
    creaLadrillos(x,y,l){
        for(let i=0; i<=l;i++){    
            this.ladrillos = new Obstaculo(this,x,y,"ladrillo");    
            x=x+130;
            
        }
    }
    //crea ladrillos y los elimina
    reciclaLadrillos(x,y){
                if(this.ladrillos.body.position.x < 1170){
                    this.ladrillos.destroy();
                    this.creaLadrillos(1170,700,9);
                }
    }
}

export default Juego;
