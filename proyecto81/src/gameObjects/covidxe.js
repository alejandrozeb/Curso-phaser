class Covidxe extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,type){
        super(scene,x,y,type);
        //cuando entre aqui se creara la escena
        scene.add.existing(this);
        //agregando fisica a las palas
        scene.physics.world.enable(this);
        //que la pala no sobrepase los limites
        this.body.setCollideWorldBounds(true);
        this.flipX=true;
        this.setOrigin(0.5,0.5);
        this.setScale(1); 
       // this.body.setSize(50,100,0,0).setOffset(25,0);
      // this.body.setSize(720,480).setOffset(0.100);
        console.log(this);
        this.body.bounce.set(0.4);
        this.body.immovable = true;

        
    }
}

export default Covidxe;