//const { MongoClient } = require('mongodb');

const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
dotenv.config();

const URL_LOCAL = process.env.MONGO_LOCAL;
const URL_ATLAS = process.env.MONGO_ATLAS;

console.log(URL_LOCAL);
console.log(URL_ATLAS);

const client = new MongoClient(URL_ATLAS);

const dbNombre = 'miDB';

//Creamos una función para conectar a la base de datos
const crearColeccion = async () =>{

    try{

        await client.connect();

        const db = client.db(dbNombre); 

        db.createCollection('Personas', (err, res) => {
            if(err) throw err;
            console.log('Colección creada correctamente');
            client.close();
        });



    } catch(error){
        console.log('Error al conectar a la base de datos', error);
    }
}

//Ejecutamos la conexión a la data base
crearColeccion();