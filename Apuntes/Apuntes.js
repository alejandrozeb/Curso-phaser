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
*/