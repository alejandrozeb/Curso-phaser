import Padre from '../gameObjects/padre.js';
import Hija from '../gameObjects/hija.js';
class GanaJuego extends Phaser.Scene {
    constructor() {
        super({key: 'GanaJuego'});
    }

    init() {
        console.log('Scene: GanaJuego');
    }

    create() {
        //background
        this.fondo=this.add.tileSprite(800,450,this.scale.width*2,this.scale.height*2, 'fondoFinal');
        this.fondo.flipX=false;
        //home
        this.add.image(260,610,'home').setScale(0.5);
        //personajes
        this.personajePadre = new Padre(this,490,620,'padre');
        this.personajeHija = new Hija(this,650,630,'hija');
        
    }

    update(time, delta) {

    }
}

export default GanaJuego;
