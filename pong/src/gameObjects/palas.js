class Palas extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,type){
        super(scene,x,y,type);
        //cuando entre aqui se creara la escena
        scene.add.existing(this);
        //agregando fisica a las palas
        scene.physics.world.enable(this);
        //especificar que este cuerpo es inamovible
        this.body.immovable = true;
    }
}

export default Palas;