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
    this.load.spritesheet('evil_tomato', 'assets/evil_tomato.png',{frameWidth: 16, frameHeight: 25});
}
function create(){
    console.log('h cre');
    //agregamos la imagen a la vista
    this.tomato = this.add.sprite(100,100,'evil_tomato');
    
}