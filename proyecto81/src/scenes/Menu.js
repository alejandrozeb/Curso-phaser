
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



      
      //medico
      this.medico1 = this.add.sprite(100,400,'medico1').setScale(1);
      //cargamos desd cache
      this.dataAnim3= this.cache.json.get('medico1_anim');
      console.log(this.dataAnim3);
      //cargamos la animacoin
      this.anims.fromJSON(this.dataAnim3);
      this.medico1.anims.play('walk');

      

    }

    update(time, delta) {
        
    }
}

export default Menu;
