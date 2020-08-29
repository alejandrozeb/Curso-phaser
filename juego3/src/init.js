const config = {
    width:320*2,
    height: 180*2,
    parent: "container",
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}
var game = new Phaser.Game(config);

function preload(){
    //console.log('soy preload');
    //cargando imagen en el cache de phaser que es global y que odemos usar en diferenes escenas
    this.load.image("pajaro", "./assets/bird.png");
}
function create(){
    //console.log('soy create')
    //esta es una escena
    //pasamos las imagen    this.add.image(x,y,nombre)
    //para controlar el pajaro lo guardamos en una variable
    this.pajaro=this.add.image(80,100,"pajaro");
    //mostrando todos los atributos del objeto pajaro, para poder modificar sus atributos usamos get a sets del prototype
    console.log(this.pajaro);
    this.pajaro.setScale(2);
    //para girar el pajaro
    this.pajaro.flipX=true;
    //para rotar el pajaro
    //this.pajaro.setRotation(30);
    //en grados
    this.pajaro.setAngle(30);
}
function update(time, delta){  //actualiza el estado cada vez y recibe dos parametros el time,delta
    //console.log(delta); //muestra el delta y sus iteraciones
};