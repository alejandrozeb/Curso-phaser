class Scene_play extends Phaser.Scene{
    constructor(){
        super({key: "Scene_play"});
    }
    preload(){
        //ya usamos el bootloader como preload
    }
    create(){
        let center_width=this.sys.game.config.width/2;
        let center_height=this.sys.game.config.height/2;
        //separador
        this.add.image(center_width,center_height, "separador");
        //viendo las variables internas para ver el centro
       // console.log(this.sys.game.config.width);
       //palas
       this.izquierda = this.add.image(30,center_height,"izquierda");
       //derecha
       this.derecha = this.add.image(this.sys.game.config.width-30,center_height,"derecha");
       //bola
       this.ball = this.physics.add.image(center_width,center_height,"ball");

       //agreando velocidad a la bola
       this.ball.setVelocityX(-100);
    }
}
export default Scene_play;