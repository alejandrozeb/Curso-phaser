const config = {
    width: 320,
    height: 180,
    parent: 'container',
    pixelArt: true,
    scene: {
        preload,
        create
    }
};

new Phaser.Game(config);
function preload(){
    console.log('p');
    this.load.path='./assets/';
    this.load.json('tomato_anim','tomato_true_anim.json');
    this.load.atlas('tomato_true', 'tomato_true.png', 'tomato_true_atlas.json');
}
function create(){
    console.log('c');
    this.tomato = this.add.sprite(100,100,'tomato_true');
    this.tomato_walk = this.add.sprite(120,100,'tomato_true');
    this.tomato_agachado = this.add.sprite(140,100,'tomato_true');

    this.tomato_anim = this.cache.json.get('tomato_anim');

    this.anims.fromJSON(this.tomato_anim);

    this.tomato.anims.play('tomato_idle');
    this.tomato_walk.anims.play('tomato_walk');
    this.tomato_agachado.anims.play('tomato_agachado');
}