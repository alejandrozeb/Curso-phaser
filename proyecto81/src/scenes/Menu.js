
class Menu extends Phaser.Scene {
    constructor() {
        super({key: 'Menu'});
    }

    init() {
        //this.load.setPath('../../assets/');
        //this.stage.backgroundColor = '#FF0000';
        /* this.asddsdsa=this.load.image('boton','./../assets/background/logo_gamma.png');
        console.log(this.asddsdsa);

        this.asddsdsad=this.load.image('boton','background/logo_gamm.png');
        console.log(this.asddsdsad) */
        this.cameras.main.setBackgroundColor('#8A8D8F');
        console.log('desde menu');
    }

    create() {
        //this.boton = this.add.image(this.scale.width/2,this.scale.height/2,'boton');
        
        const helloButton = this.add.image(100,100,'boton');
        helloButton.setInteractive();
        console.log(helloButton);
    
        helloButton.on('pointerover', () => { console.log('pointerover'); });
    }

    update(time, delta) {

    }
}

export default Menu;
