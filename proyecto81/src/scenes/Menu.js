
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



      this.golem = this.add.sprite(this.scale.width/2,550,'covidxe');
      this.dataAnim = this.cache.json.get('covidxe_anim');
          
      console.log(this.anims.fromJSON(this.dataAnim));
     
      this.golem.anims.play('walking');



      this.medico = this.add.sprite(1000,400,'medico').setScale(0.5);
      //cargamos desd cache
      this.dataAnim2= this.cache.json.get('medico_anim');
      console.log(this.dataAnim2);
      //cargamos la animacoin
      this.anims.fromJSON(this.dataAnim2);
      this.medico.anims.play('walk');

      

    }

    update(time, delta) {
        
    }
}

export default Menu;
