class SceneB extends Phaser.Scene {
    constructor(){
        super({key: "SceneB", active: true}); //nombre de referencia, ledecimos que la escena estara activa
    }
    preload(){

    }
    create(){
        //alert("se ha cargado la escena A");
        let graphics = this.add.graphics(); //habilitando graficas

        graphics.fillStyle(0xff3399,1);  //rellenndo un cuadrado

        //cuadrado mas grande
        graphics.fillRect(100,200,600,300);
       //cudrado de la a
        graphics.fillRect(200,100,100,100);
        //añadiendo texto
        this.add.text(220,110,"B",{font: "96px Courier", fill: "#000000"});
    }
    update(time,delta){

    }
}