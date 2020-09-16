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
        this.add.tileSprite(800,450,this.scale.width*2,this.scale.height*2, 'fondoFinal');
        //personajes
        this.personajePadre = new Padre(this,0,100,'padre');
        this.personajeHija = new Hija(this,100,200,'hija');
        
    }

    update(time, delta) {

    }
}

export default GanaJuego;
