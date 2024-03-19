const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');// librería externa
//const path = require('node:path'); nativo de node
const hbs = require('hbs');


dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

//1. configuramos las vistas de la app
app.set('view engine', 'hbs');

//2. confirmo la ruta a las vistas
app.set('views', path.join(__dirname, 'views'));

//3. confirmo la ruta a los archivos parciales
//app.set('partials', path.join(__dirname, 'views/partials'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

//traemos la info de la database
//const productos = require('./model/productos');

//traemos las rutas del routes
const productosRoutes = require('./routes/productosRoutes');
//const clientesRoutes = require('./routes/clientesRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
//app.use(morgan());
//app.use(morgan('combined'));

app.use('/api/productos', productosRoutes);
app.use('/api/clientes', require('./routes/clientesRoutes'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/productos', (req, res) => {
    res.render('productos');
});

app.get('/clientes', (req, res) => {
    res.render('clientes');
});

app.get('/home', (req, res) => {
    res.render('home');
});


/* app.delete('/api/productos', (req, res) => {
    res.json(productos);
}); */

app.listen(PORT, () =>{
    console.log(`Server listening on http://localhost:${PORT}`);
});

