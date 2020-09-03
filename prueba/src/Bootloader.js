class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
        
    }

    preload() {
        console.log('Bootloader');
        this.load.setPath('./assets/');

        this.load.image('logo_gamma', 'logo_gamma.png');
        this.load.image('background', 'background-day.png');

        this.load.on('complete', () => {
            console.log('Load complete');
        });
    }

    create() {
        //this.add.image(this.scale.width/10, this.scale.height/10, 'background');

       this.fondo=this.add.tileSprite(0,0,370,550, 'background');
       console.log(this.fondo);
    }
    update(){
        this.fondo.tilePositionX -=1;
    }
}
export default Bootloader;