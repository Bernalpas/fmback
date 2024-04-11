

import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const URL_LOCAL = process.env.MONGO_LOCAL;
const URL_ATLAS = process.env.MONGO_ATLAS;

console.log('======================================');
console.log(URL_LOCAL);
console.log(URL_ATLAS);
console.log('======================================');

const client = new MongoClient(URL_LOCAL);

//Creamos una función para conectar a la base de datos
const conectarDB = async () =>{

    try{

        await client.connect();

        console.log('======================================');
        console.log(`Base de datos conectada correctamente a escualadanza y la URL es ${URL_LOCAL}`);
        console.log('======================================');

    } catch(error){
        console.log('Error al conectar a la base de datos', error);
    }
}

//Ejecutamos la conexión a la data base
export default conectarDB;









