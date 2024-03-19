
const express = require('express');
const dotenv = require('dotenv');

//librería nativa de node para orientar a la aplicación para encontrar archivos
const path = require('node:path');
dotenv.config();


//require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 9000;
//const { middleUno } = require('./middleware');
const middleUno = require('./middleware');


//Middelwares: funciones que se ejecutan antes de que lleguen a las rutas
//1. Una forma
/* const middleUno = (req, res, next) => {

    console.log('===============================================');
    console.log('Hola Gente son el Middelwares UNO');
    console.log('===============================================');
    
    next();
}; */

//2. Uso del Meddle: es general - para todas las rutas
app.use(middleUno);
app.use(express.json());//puede leer y responder con JSON
app.use(express.urlencoded({ extended: true }));//puede leer y responder con JSON
app.use(express.static('public'));//busca los archivos estáticos en public
app.use(express.static(path.join(__dirname, 'public')));

console.log(__dirname + '/public');

//un meddleqare personalizado
app.get('/form', middleUno , (req, res) =>{
    res.send('Soy el FORM de la APP');
});


app.get('/post', (req, res) =>{
    res.send('Soy el POST de la APP');
});


//Recibo de datos
app.post('/json', (req, res) =>{
    
    console.log('===============================================');
    console.log(req.body);
    console.log(req.body.nombre);
    console.log(req.body.stock);
    console.log(req.body.precio);
    console.log('===============================================');

    //desectructuración

    const { nombre, stock, precio } = req.body;

    res.json(
        {
            //nombre: req.body.nombre,
            nombre: nombre,
            //stock: req.body.stock,
            stock: stock,
            //precio: req.body.precio,
            precio: precio
        })

})

app.post('/urlencoded', (req, res) =>{
    
    console.log('===============================================');
    console.log(req.body);
    console.log(req.body.nombre);
    console.log(req.body.edad);
    console.log(req.body.dni);
    console.log('===============================================');

    //desectructuración
    const { nombre, edad, dni } = req.body;

    res.json(
        {
            nombre: nombre,
            edad: edad,
            dni: dni
        })

})

//enviar archivos 
app.get('/', (req, res) =>{
    res.status(200).sendFile('index.html');
});

app.get('/error', (req, res) =>{
    res.status(302).redirect('pages/redirect.html');
});




app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server listening on http://localhost:${PORT}`);

});
