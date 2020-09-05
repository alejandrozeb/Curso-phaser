import Game_over from './scenes/Game_over.js';
import Juego from './scenes/Juego.js';
import Menu from './scenes/Menu.js';
import Bootloader from './Bootloader.js';

const config = {
    title: "EvitandoCovidxes",
    version: "0.0.1",
    type: Phaser.AUTO,
    scale: {
        parent: "phaser_container",
        width: 300,
        height: 200,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: "#ffffff",
    pixelArt: true,
    physics: {
        default: "arcade",
        "arcade": {
            gravity: {
                y: 500
            }
        }
    },
    scene: [Bootloader, Menu, Juego, Game_over]
};

new Phaser.Game(config);