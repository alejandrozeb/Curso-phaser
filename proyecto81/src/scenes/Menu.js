
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


      //covidxe
      this.golem = this.add.sprite(this.scale.width/2,550,'covidxe');
      this.dataAnim = this.cache.json.get('covidxe_anim');
          
      this.anims.fromJSON(this.dataAnim);
     
      this.golem.anims.play('walking');
      //medico
      this.personajeMedico = this.add.image(100,550,'medicoWalk').setScale(0.2);
      //letra

        //mensaje
        let graphics = this.add.graphics();
        graphics.fillStyle(0xffffff,1);
        graphics.fillRect(20,300,200,100);
        this.add.text(20,300,"Debo llevar").setFontFamily("Arial").setFontSize(30).setOrigin(0,0).setColor('#000000');
        this.add.text(20,330,"medicamentos").setFontFamily("Arial").setFontSize(30).setOrigin(0,0).setColor('#000000');
        this.add.text(20,360,"a mis amigos").setFontFamily("Arial").setFontSize(30).setOrigin(0,0).setColor('#000000');
    }

    update(time, delta) {
        
    }
}

export default Menu;
