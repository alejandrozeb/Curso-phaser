
class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        console.log('Bootloader');
        this.load.setPath('./assets/');
        //cargando imagenes
        this.load.image('fondoNoche', 'logo_gamma.png');
        this.load.image('fondoNoche2', 'background/background_1.png');
        this.load.image('fondoNoche3', 'background/background_2.png');
        this.load.image('boton', 'background/Bonus_4_1.png');
        this.load.on('complete', () => {
            //console.log('Load complete');
            this.scene.start("Menu");
            
        });
       
        

        
        
    }

    create() {
        //mostrando
    }
    update(){
        
    }
}
export default Bootloader;