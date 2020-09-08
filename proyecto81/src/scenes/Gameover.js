
class Gameover extends Phaser.Scene {
    constructor() {
        super({key: 'Gameover'});
    }

    init() {
        console.log('Scene: Gameover');
        this.cameras.main.setBackgroundColor('#FFFFF');
    }

    create() {
        this.textCovid = this.add.text((this.scale.width/2), (this.scale.height/2)-300, 'Game').setOrigin(0.5,0.5).setFontFamily("Arial").setFontSize(100);
        this.textIniciar = this.add.text((this.scale.width/2), (this.scale.height/2)-200,'Over').setOrigin(0.5,0.5).setFontSize(100).setFontFamily("Arial");
        this.textFinal = this.add.text((this.scale.width/2), (this.scale.height/2)+100, 'Reiniciar').setOrigin(0.5,0,5).setFontSize(50).setFontFamily("Arial");
    const clickBoton = this.add.image(this.scale.width/2,this.scale.height/2,"boton")
      .setInteractive()
      .on('pointerdown', () => {
        this.scene.start("Juego");
        
      });
    }

    update(time, delta) {

    }
}

export default Gameover;
