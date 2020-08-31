class SceneA extends Phaser.Scene {
    constructor(){
        super({key: "ScenaA"}); //nombre de referencia
    }
    preload(){

    }
    create(){
        //alert("se ha cargado la escena A");
        let graphics = this.add.graphics(); //habilitando graficas

        graphics.fillStyle(0xff3301,1);  //rellenndo un cuadrado

        //cuadrado mas grande
        graphics.fillRect(100,200,600,300);
       //cudrado de la a
        graphics.fillRect(100,100,100,100);
        //añadiendo texto
        this.add.text(120,110,"A",{font: "96px Courier", fill: "#000000"});
    }
    update(time,delta){

    }
}