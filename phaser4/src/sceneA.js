class SceneA extends Phaser.Scene {
    constructor(){
        super({key: "ScenaA"}); //nombre de referencia
    }
    create(){
        alert("se ha cargado la escena A");
    }
}