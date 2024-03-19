const express = require('express');
const dotenv = require('dotenv');

//iniciamos la configuración de las variables de entorno
dotenv.config();

//métodos dos de configuración de variables de entorno
//require('dotenv').config()


const app = express();
const PORT = process.env.PORT || 8080;


app.get('/', (req, res) => {

    console.log('=====================================');

    console.log(process.env);

    console.log('=====================================');

    //imprimimos en consula las variables de entorno agregadas
    console.log(process.env.PORT);
    console.log(process.env.PASSWORD);
    console.log(process.env.PASSWORD_GOOLE);

    console.log('=====================================');

    res.send('Yo de nuevo saludando');

    console.log('doc enviado');


    //respuesta que podemos procesar con express
    //res.send();
    //res.end();
    //res.redirect();
    //res.json();
    //res.status();
    //res.render();
    //res.sendFile();
    //res.download();


});


//send
app.get('/send', (req, res) => {

    console.log('=====================================');
    console.log(req.url);
    console.log('=====================================');

    res.send(`

    <form>
        <p>
            Ingresa tu nombre completo: <input type="text" name="nombrecompleto">
            <input type="submit" value="Enviar la información">
            <input type="reset" value="Eliminar datos">
        </p>
    </form>

    `);


});


//send
app.get('/descargas', (req, res) => {

    console.log('=====================================');
    console.log(req.url);
    console.log('=====================================');

    res.download('./hola.txt');


})






/* app.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);

    console.log(`Servidor corriendo en el puerto http://localhost:${process.env.PORT}`);
}); */


app.listen(PORT, (err) => {
    if (err) throw new Error(err);

    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});






