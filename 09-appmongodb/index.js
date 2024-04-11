import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'node:path'; 
import hbs from 'hbs';
import contactosRouter from './routes/contactosRouter.js';

const app = express();

app.set('view engine', 'hbs');
//app.set('views', path.join(__dirname, 'views'));
app.set('views', 'views');
//hbs.registerPartials(path.join(__dirname, 'views/partials'));
hbs.registerPartials('views/partials');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static('public'));
app.use(cors());
app.use(morgan('dev'));

app.use('/api/contactos', contactosRouter)

app.get('/', (req, res) => {
    res.render('index', {
        style: 'index.css'
    });
});

app.get('/*', (req, res) => {
    res.render('error', {
        style: 'index.css'
    });
});

export default app;