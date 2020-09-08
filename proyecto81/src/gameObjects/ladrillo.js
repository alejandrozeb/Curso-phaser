class Ladrillo extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,type){
        super(scene,x,y,type);
        //cuando entre aqui se creara la escena
        scene.add.existing(this);
        this.setScale(0.6);  
        //this.setSize();
        console.log(this.width,this.height);
        this.setSize(this.width/2,this.height/2);
        console.log(this.width,this.height);
        
        //agregando fisica a las palas
        scene.physics.world.enable(this);
        //especificar que este cuerpo es inamovible
        this.body.immovable = true;
        //que la pala no sobrepase los limites
        this.body.setCollideWorldBounds(true); 
        this.setOrigin(0,0);
        this.body.setAllowGravity(false);
        this.body.setVelocityX(-100);
        //cambia tamaño
        this.body.setSize(150,50).setOffset(-50,100);
        this.body.bounce.set(0,1);

        console.log(this.body);
    }
}

export default Ladrillo;