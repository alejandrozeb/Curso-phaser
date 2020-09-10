class Angel extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,type){
        super(scene,x,y,type);
        //cuando entre aqui se creara la escena
        scene.add.existing(this);
        //agregando fisica a las palas
        scene.physics.world.enable(this);
        //que la pala no sobrepase los limites
        this.body.setCollideWorldBounds(true);
        //
        //
        this.setOrigin(0.5,0.5);
        this.setScale(0.2);
        //this.setScale(0.15);
        //this.body.setSize(50,100,0,0).setOffset(25,0);
        this.body.setSize(600,900).setOffset(-25,600);
       // this.body.setSize(500,900).setOffset(380,1000);
        this.body.bounce.set(0.4);
    }
}

export default Angel;