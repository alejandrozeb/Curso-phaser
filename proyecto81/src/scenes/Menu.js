
class Menu extends Phaser.Scene {
    constructor() {
        super({key: 'Menu'});
    }

    init() {
        this.cameras.main.setBackgroundColor('#8A8D8F');
        console.log('desde menu');
    }

    create() {
        this.textCovid = this.add.text((this.scale.width/2)-30, (this.scale.height/2)-300, 'Evitando');
        this.textIniciar = this.add.text((this.scale.width/2)-30, (this.scale.height/2)-200,'Iniciar');
    const clickBoton = this.add.image(this.scale.width/2,this.scale.height/2,"boton")
      .setInteractive()
      .on('pointerdown', () => {
        this.scene.start("Juego");
        console.log('asdasd');
      });

    }

    update(time, delta) {
        
    }
}

export default Menu;
