/* 
Phaser es una libreria que nos permite añadir animaciones mecanicas movimientos.
como funciona:
un codigo js hace funcionar una pagina html
para hacer funcionar necesitamos los recursos elemenos graficos que animar, Imagenes y adicionalmente a eso necesitamos un motor el cual es phaser con eso lograremos que exuista gravedad o colisiones. 
descargamos la libreria de:
https://phaser.io/download/stable
descargamos el archivo js
por consola:
creamos una carpeta donde se alojara nuestro juego y abrimos una consola y ejecutamos el siguientes comando:
npm init
y llenamos los datos necessario (solo puedes llenar el nombre y saltar los demas espacios), recuerda que debes tener node instala, si deseas instalar node puedes visitar el repositorio de curso de javascript para seguir los pasos de instalacion.
luego instalamos phaser
npm install --save phaser
instalra la ultima version estable de phaser.
pero en este curso usaremos la version:
npm install --save phaser@3.8.0
los juegos se dividen en estados 
el estado de menu principal sera el estado 1
y el siguiente ya sera el juego estado 2
el estado es cuando termine el juego estado 3
update function
time y delta son importantes por crean un loop infinito
el delta se usa para que el movimientos ea el mismo en cualquier navegador

//para cargar los assets las usamos en preload, ya creamos una scena

//movimiento se puede modificar su posicion en el eje x y y
fisicas
para añadir fisicas tnemos que agregar a la variable de configuracion

physics:{
        default: "arcade",  //tpo de fisica normal en juegos como mario
        arcade: {
            gravity:{
                y:500       //añadimos gravedad en y
            }
        }
    }

//para darle estos atributos  al imagen cargada la usamos en create de la siguiente forma
this.pajaro=this.physics.add.image(80,100,"pajaro");
pero el pajaro cae infinitamente debemos agregar colisiones
this.pajaro.setCollideWorldBounds(true);
////////////////////////////////////////////////////
movimiento con controles 
 this.input.keyboard.on("keydown_RIGHT", () =>{
        // al presionar el botn a la derecha
        this.pajaro.x++;    //aumentamos posiciones en x
    });
    tambien podemos usar estas funcion para las otras teclas y determinar que se hara
 this.input.keyboard.on("keydown_D", () =>{
        // al presionar el botn a la derecha
        this.pajaro.x++;    //aumentamos posiciones en x
    });
solamente cambiando la cadena que enviamos a la funcion, y con un arrow function podemos dar a la teclas que necesitemos


****escenas****
va cambiando escenas
las escenas son contenedoras de si mismas una seccion de pausa, una seccion de menu
gestiona el orden 
y actualiza
verifica si esta activa  luego le dice si necesita actualizarse o no
estos le dice a todos los complemetnos que se actualiza
npm init -y 
npm install --save phaser@3.8.0
 scene:[SceneA,SceneB]
 se va cargando por posicion en este caso la sceneB estara activa

//animacion

sprite 
es solo una imagen para crear una animacin creamos el Sprite sheet
que pueden tener una animacion de caminata, quietp y abajo
como entiende phaser esto
por dentrose le indica de que punto a que punto es la animacion de caminar y la otra de estar quieto
eso es un atlas

start end

podemos cargar la animacionn por medio de atlas
en evil_tomate.json
internanmaente va cortando la slider y asigna un numero y su extension

atlas
crearemos los atlas a partir de la herramietna atlas
https://gammafp.com/tools/
y las animaiones
https://gammafp.com/tools/

en el atlas cargamos imagenges separadas y las convierte en atkas y las animaciones a parti de ese nombre podemos crear la animacion que necesitemos
//////////////////phaser CLI

para evitar crear la estructura basica usaremos una herramienta que nos permita realizar esta tarea.

npm install -g phaser3-cli-gamma
pg --version

para instalar en windows 
Get-ExecutionPolicy
podemos ver la configuracion
Set-ExecutionPolicy unrestricted
cambiamos pero estos se deben ejecutar con powershell como admministtrador.

ejecutamos pg--new prueba

para crear una escena
pg --scene Cobaya       //el nombre de la scena es cobaya
    */
   