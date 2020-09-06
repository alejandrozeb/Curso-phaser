
class Juego extends Phaser.Scene {
    constructor() {
        super({key: 'Juego'});
    }

    init() {
        console.log('Scene: Juego');
    }

    create() {
        this.fondo=this.add.tileSprite(0,400,this.scale.width*2,this.scale.height*2, 'fondoNoche3');
        this.angel=this.physics.add.image(80,100,"angel");
        this.angel.setOrigin(0.5,0.5);
        this.angel.setScale(0.4);
        this.angel.setCollideWorldBounds(true);
        this.angel.setBounce(0.2);
    }

    update(time, delta) {
        this.fondo.tilePositionX +=1;
    }
}

export default Juego;
