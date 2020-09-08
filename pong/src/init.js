import Bootloader from './scenes/bootloader.js';
import Scene_play from './scenes/scene_play.js';
const config = {
    width:300,
    height: 200,
    parent: "contenedor",
    physics:{
        default: "arcade"
    },
    scene:[
        Bootloader,
        Scene_play
    ]
}

new Phaser.Game(config);