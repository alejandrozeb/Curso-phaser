class SceneC extends Phaser.Scene {
    constructor(){
        super({key: "SceneC", active: true}); //nombre de referencia, y que estara activa
    }
    preload(){

    }
    create(){
        //alert("se ha cargado la escena A");
        let graphics = this.add.graphics(); //habilitando graficas

        graphics.fillStyle(0xff9999,1);  //rellenndo un cuadrado

        //cuadrado mas grande
        graphics.fillRect(100,200,600,300);
       //cudrado de la a
        graphics.fillRect(300,100,100,100);
        //añadiendo texto
        this.add.text(320,110,"C",{font: "96px Courier", fill: "#000000"});
    }
    update(time,delta){

    }
}