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
    this.load.image("pajaro", "./assets/bird_dos.png");
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
    //this.pajaro.setAngle(30);
    //para modificar el punto de rotacion
    //this.pajaro.setOrigin(0.5,0.5); //por defecto al medio
    //this.pajaro.setOrigin(0,0.5); //en x a la izquierda centrado
    //this.pajaro.setOrigin(0,0); //en x a la izquierda superior
    //this.pajaro.setOrigin(0,1); //en x a la izquierda inferior
    //this.pajaro.setOrigin(1,1); //a la deracha y abajo
    this.pajaro.setOrigin(1,0); //a la deracha y arriba
    //de esta forma cambiamos el origen
    //al moento de renderizar toma estos datos en cuenta
}
function update(time, delta){  //actualiza el estado cada vez y recibe dos parametros el time,delta
    //para rotar el pajaro, el angulo se va aaumentando mienstras transcurre el loop
    this.pajaro.angle++;
    //el punto de rotacion de la imagen es el centro, para modificar el origen
};