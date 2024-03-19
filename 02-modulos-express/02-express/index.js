

//1. importamos el módulo a utilizar - ES5
const express = require('express'); 

//2. creamos una instancia de express
const app = express();

//4. Creamos una variable para el puerto de mi servidor
const PORT = 9000;

//3306: mysql
//3000: create-react-app
//5200 y algo: vite
//4200: angular
//27000 y algo: mongo
//9000: tomcat
//3000: spring 


//Verbos http de express
//GET: responder con el recurso solicitado
//1. Ruta
//2. Función para responder a la petición
app.get('/', function(peticion, respuesta){

    console.log('======================================================');

    console.log(peticion);
    console.log(peticion.url);
    console.log(peticion.method);
    console.log(peticion.headers);
    console.log(peticion.body);

    console.log('======================================================');

    //respondemos a la petición del cliente

    respuesta.send('Bienvenido al Servidor con Node');


});


app.get('/saludo', function(peticion, respuesta){


    respuesta.send('Hola mundo desde Node');


});

//3. deploy del servidor
/* app.listen(3000, function(){
    console.log('Servidor corriendo en el puerto 3000');
});  */

//app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.listen(PORT, (err) => {

    if(err) console.log(err);

    console.log(`Server running on port http://localhost:${PORT}`)

});

