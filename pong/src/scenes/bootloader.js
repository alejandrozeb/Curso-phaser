
class Bootloader extends Phaser.Scene{
    constructor(){
        super({key: "Bootloader"});
    }
    preload(){

        //cuando se carge todo llamamos a la scene
        this.load.on("complete", () => {
            //cargamos la escena_play
        this.scene.start("Scene_play");
        })
        this.load.image("ball", "./assets/ball.png");
        this.load.image("izquierda", "./assets/left_pallete.png");
        this.load.image("derecha", "./assets/right_pallete.png");
        this.load.image("separador", "./assets/separator.png");
    }
}

export default Bootloader;