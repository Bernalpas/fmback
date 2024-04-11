
//const { MongoClient } = require('mongodb');

const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
dotenv.config();

const URL_LOCAL = process.env.MONGO_LOCAL;
const URL_ATLAS = process.env.MONGO_ATLAS;

console.log(URL_LOCAL);
console.log(URL_ATLAS);

const client = new MongoClient(URL_LOCAL);

//Creamos una función para conectar a la base de datos
const conectarDB = async () =>{

    try{

        await client.connect();

        const dbNombre = 'escueladanza';

        const database = client.db(dbNombre); 

        console.log('======================================');
        console.log(`Base de datos conectada correctamente a ${dbNombre}`);
        //console.log(`Base de datos conectada correctamente`);
        console.log('======================================');

    } catch(error){
        console.log('Error al conectar a la base de datos', error);
    }
}



//Ejecutamos la conexión a la data base
conectarDB();


