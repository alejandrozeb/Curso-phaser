import Cobaya from './scenes/Cobaya.js';
import Bootloader from './Bootloader.js';

const config = {
    title: "prueba",
    version: "0.0.1",
    type: Phaser.AUTO,
    scale: {
        parent: "phaser_container",
        width: 200,
        height: 300,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: "#c7ecee",
    pixelArt: true,
    scene: [Bootloader, Cobaya]
};

new Phaser.Game(config);