class Ladrillo extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,type){
        super(scene,x,y,type);
        //cuando entre aqui se creara la escena
        scene.add.existing(this);
        //agregando fisica a las palas
        scene.physics.world.enable(this);
        //especificar que este cuerpo es inamovible
        this.body.immovable = true;
        //que la pala no sobrepase los limites
        this.body.setCollideWorldBounds(true); 
        this.setOrigin(0,0);
        this.body.setAllowGravity(false);
        this.body.setVelocityX(-100);
        this.setScale(0.4);  
        this.setSize(50,50);
        this.body.bounce.set(0.1);

        console.log(this.body);
    }
}

export default Ladrillo;