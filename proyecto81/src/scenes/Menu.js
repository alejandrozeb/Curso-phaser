
class Menu extends Phaser.Scene {
    constructor() {
        super({key: 'Menu'});
    }

    init() {
        this.cameras.main.setBackgroundColor('#8A8D8F');
    }

    create() {
        this.textCovid = this.add.text((this.scale.width/2), (this.scale.height/2)-200, 'Evitando Covidxes').setFontFamily("Arial").setFontSize(100).setOrigin(0.5,0.5);
        this.textIniciar = this.add.text((this.scale.width/2), (this.scale.height/2)-100,'Iniciar').setFontFamily("Arial").setFontSize(50).setOrigin(0.5,0.5);
    const clickBoton = this.add.image(this.scale.width/2,this.scale.height/2,"boton")
      .setInteractive()
      .on('pointerdown', () => {
        this.scene.start("Juego");
        
      });

    }

    update(time, delta) {
        
    }
}

export default Menu;
