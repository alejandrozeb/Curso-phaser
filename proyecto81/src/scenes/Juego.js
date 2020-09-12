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
        //vida
        //fondo
        this.fondo=this.add.tileSprite(0,400,this.scale.width*2,this.scale.height*2, 'fondoNoche3');
        //personaje
        this.personaje = new Angel(this,300,100,"medico1");
        //anim  personaje en juego
        this.dataAnim3= this.cache.json.get('medico1_anim');
        this.anims.fromJSON(this.dataAnim3);
        //enemigo
        this.enemigo = new Covidxes(this,1400,100,"covidxe");
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
            this.physics.add.collider(this.personaje, this.enemigo);
        },loop: true,});
        // timer enemigo
        this.scene.scene.time.addEvent({delay:14000,callback: () => {
            this.enemigo = new Covidxes(this,1400,100,"covidxe");
            this.physics.add.collider(this.enemigo, this.personaje);
        },loop: true,});
    }
    update(time, delta) {
        this.fondo.tilePositionX +=1;
        //controles
        //
        if(this.cursor_D.isDown){
            this.personaje.body.setVelocityX(300);
            this.personajeAnim('walk');
        }else if(this.cursor_A.isDown){
            this.personaje.body.setVelocityX(-300);
            this.personajeAnim('walk');
        }else{
            this.personaje.body.setVelocityX(0);
            this.personajeAnim('idle');
        }
        //parado
        /* console.log();
        if(this.personaje.body.velocity.x===0){
            this.personajeAnim('idle');
        } */
        //salto
        if(
            this.cursor_W.isDown && this.personaje.body.blocked.down
        ){
            this.personaje.body.setVelocityY(-500);
            this.personajeAnim('jumpstart');
        }else if(this.cursor_W.isDown && this.personaje.body.touching.down){
            this.personaje.body.setVelocityY(-400);
            this.personajeAnim('jumploop');
        }
        //recicla ladrillos
        this.reciclaLadrillos(100,100);
        //personaje sale del juego
        if(this.personaje.body.position.x<-250){
            //escena gameover
            //this.personaje.body.reset(100,100);
           this.scene.start("Gameover");
        }
        //enemigo
        
        //si se destruye uno 
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
    //animacion
    personajeAnim(accion){
        this.personaje.anims.play(accion,true);
        //this.personaje.anims.
    }
}

export default Juego;
