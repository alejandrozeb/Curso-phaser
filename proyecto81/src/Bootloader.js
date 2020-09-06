
class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        console.log('Bootloader');
        this.load.setPath('./assets/');
        //cargando imagenes
        this.load.image('fondoNoche', 'logo_gamma.png');
        this.load.image('fondoNoche2', 'background/game_background_41.png');
        this.load.image('boton', 'background/Bonus_4_1.png');
        this.load.on('complete', () => {
            //console.log('Load complete');
            this.scene.start("Menu");
        });
       
        

        
        
    }

    create() {
        //mostrando
        this.fondo=this.add.tileSprite(100,200,this.scale.width*2,this.scale.height*2, 'fondoNoche2').setScale(3);
    }
    update(){
        //this.fondo.tilePositionX -=1;
    }
}
export default Bootloader;