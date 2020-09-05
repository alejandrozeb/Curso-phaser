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


        this.load.on('complete', () => {
            console.log('Load complete');
        });

        

        
        
    }

    create() {
        //mostrando
        this.fondo=this.add.tileSprite(0,30,this.scale.width*2,this.scale.height*2, 'fondoNoche2').setScale(1);
    }
    update(){
        this.fondo.tilePositionX -=1;
    }
}
export default Bootloader;