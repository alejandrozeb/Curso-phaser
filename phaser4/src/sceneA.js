class SceneA extends Phaser.Scene {
    constructor(){
        super({key: "SceneA"}); //nombre de referencia
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('fuente3','fuente3.png');
        this.load.json('fuente3_json','fuente3.json');
    }
    create(){
        //letras
        //cargamos
        let config = this.cache.json.get('fuente3_json');
        //cargando a cache
        this.cache.bitmapFont.add('fuente3',Phaser.GameObjects.RetroFont.Parse(this,config));
        //usamos
        this.texto = this.add.bitmapText(100,50,'fuente3','');






        //alert("se ha cargado la escena A");
        let graphics = this.add.graphics(); //habilitando graficas

        graphics.fillStyle(0xff3301,1);  //rellenndo un cuadrado

        //cuadrado mas grande
        graphics.fillRect(100,200,600,300);
       //cudrado de la a
        graphics.fillRect(100,100,100,100);
        //añadiendo texto
        this.add.text(120,110,"A",{font: "96px Courier", fill: "#000000"});
        //podemos acceder a una escena desde aqui con el manejador de escenas
       // this.scene.add("SceneC", new SceneC);
        //normalmente se carga una escena y la anterior se elimina
        //A encima de todo
       // this.scene.bringToTop("SceneA");
        //C se valla a tras de todo
      //  this.scene.sendToBack("SceneC");
        //Amover la escena A un paso hacia arriba
        //this.scene.moveUp(this);

        //lo ocntrario
        //this.scene.moveDown(this);

        //si C que vaya detras de b
        this.scene.moveBelow("SceneB","SceneC");
        //lo contrario
        this.scene.moveBelow("SceneB","SceneC");

        //manager de escenas
        /* this.scene.bringToTop();     encima de todo
        this.scene.sendToBack();        atras de todo
        this.scene.moveUp();            un paso arriba
        this.scene.moveDown();          un paso atras
        this.scene.moveAbove();         encima de una escena indicada
        this.scene.moveBellow();        abajo de una escena indicada
         */
    }
    update(time,delta){

    }
}