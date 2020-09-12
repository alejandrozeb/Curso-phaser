
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
        this.load.image('angel', 'personajes/Medico.png');
       // this.load.image('covidxe', 'personajes/covidxe.png');
        this.load.image('ladrillo', 'obstaculo/ladrillo.png');

        //animacion
        //cargando un json
        this.load.json('covidxe_anim','personajes/anim_ene/covidxe_anim.json');
        this.load.atlas('covidxe', 'personajes/anim_ene/covidxe.png','personajes/anim_ene/covidxe_atlas.json');
        
       //medico1
       this.load.json('medico1_anim','personajes/anim_medi1/medico1_anim.json');
       this.load.atlas('medico1', 'personajes/anim_medi1/medico1.png','personajes/anim_medi1/medico1_atlas.json');



        this.load.on('complete', () => {
            //console.log('Load complete');
           // this.scene.start("Menu");
           this.scene.start("Juego");
            
        });
       
        

        
        
    }

    create() {
        //mostrando
    }
    update(){
        
    }
}
export default Bootloader;