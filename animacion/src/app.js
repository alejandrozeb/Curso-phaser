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
    //this.load.spritesheet('evil_tomato', './assets/evil_tomato.png',{frameWidth: 16, frameHeight: 25});
    //con atlas
    this.load.atlas('tomato_atlas', './assets/evil_tomato.png','./assets/evil_tomato.json');
    //cargando un json
    this.load.json('evil_tomato_anim', './assets/evil_tomato_anim.json');
}
function create(){
    
    //agregamos la imagen a la vista
   // this.tomato = this.add.sprite(100,100,'evil_tomato',2);
    //animacion
    //obtiene la animacion
    /* console.log(this.anims.generateFrameNumbers('evil_tomato',{
        frames: [4,5,6,7,8]
    })); */
    //para usarlo debemos usar el modulo de animacion de phaser
    /* this.anims.create({
        key:'tomato_walk',
        frames: this.anims.generateFrameNumbers('evil_tomato',{
            frames: [1,2,3,4,5,6,7,8]
        }),
        repeat: -1,
        frameRate: 10
    }); *///pasamos un json, key es el nombre de la animacion,frames usamos los frames necesarios para esta animacion, con el repeat en -1 repetira la animacion cada vez que este play

    //this.tomato.anims.play('tomato_walk');


    //otra forma, con atlas
    console.log('create');
    /* this.tomato = this.add.sprite(100,100,'evil_tomato').setScale(2);
    this.anims.create({
        key:'tomato_walk',
        frames: this.anims.generateFrameNames('evil_tomato',{
            prefix: 'evil_tomato_',
            suffix: '.png',
            start: 1,
            end: 8
        }),
        repeat: -1,
        frameRate: 10
    });

    this.tomato.anims.play('tomato_walk'); */
    //con un json
    this.tomato = this.add.sprite(100,100,'tomato_atlas',2).setScale(2);
    //cargamos desd cache
     this.dataAnim= this.cache.json.get('evil_tomato_anim');
    //cargamos la animacoin
    this.anims.fromJSON(this.dataAnim);
    this.tomato.anims.play('tomato_atlas_walk');
}