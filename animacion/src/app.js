const config = {
    width: 320,
    height: 180,
    parent: 'container',
    pixelArt: true,
    scene: {
        preload,
        create
    }
}

new Phaser.Game(config);

function preload(){
    //cargo mi sprite shhet
    console.log('de');
    //16 y 25 ya sta definido
    this.load.spritesheet('evil_tomato', './assets/evil_tomato.png',{frameWidth: 16, frameHeight: 25});
}
function create(){
    
    //agregamos la imagen a la vista
    this.tomato = this.add.sprite(100,100,'evil_tomato',2);
    //animacion
    //obtiene la animacion
    /* console.log(this.anims.generateFrameNumbers('evil_tomato',{
        frames: [4,5,6,7,8]
    })); */
    //para usarlo debemos usar el modulo de animacion de phaser
    this.anims.create({
        key:'tomato_walk',
        frames: this.anims.generateFrameNumbers('evil_tomato',{
            frames: [1,2,3,4,5,6,7,8]
        }),
        repeat: -1,
        frameRate: 10
    });//pasamos un json, key es el nombre de la animacion,frames usamos los frames necesarios para esta animacion, con el repeat en -1 repetira la animacion cada vez que este play

    this.tomato.anims.play('tomato_walk');
}