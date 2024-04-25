
//importamos la conexion a la base de datos
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

//Objeto para convertir el id de mongoDB
import { ObjectId } from 'bson';

const URL_LOCAL = process.env.MONGO_LOCAL;
const URL_ATLAS = process.env.MONGO_ATLAS;
const BASEMONGO_LOCAL = process.env.BASEMONGO_LOCAL;

const client = new MongoClient(URL_LOCAL);


export const paginaContacto = (req, res) => {
    res.render('contacto', {
        style: 'contacto.css'
    });
}


//Cargar datos en la database
export const paginaFormulario = async (req, res) => {

    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = parseInt(req.body.telefono);
    const email = req.body.email;
    const provincia = req.body.provincia;
    const consulta = req.body.consulta;

    console.log(`Los datos ingresados son: ${nombre}, ${apellido}, ${telefono}, ${email}, ${consulta}, ${provincia}`);

    const Persona = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email: email,
        provincia: provincia,
        consulta: consulta
    }

    //insertamos el dato en nuestra base de datos de mongoDB
    try{

        await client.connect();

        const db = client.db(BASEMONGO_LOCAL);

        await db.collection('Personas').insertOne(Persona);

        //client.close();

    } catch(error){
        console.log('Error al conectar a la base de datos', error);
    }finally {
        await client.close();
    }
/* 
    try {
        await client.connect();
        const database = client.db(BASEMONGO_LOCAL);
        const contactos = database.collection('contactos');
        const result = await contactos.insertOne(Persona);
        console.log(`Nuevo contacto creado con el id ${result.insertedId}`);
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
 */
    
    res.render('datosCargados')

}

//Seleccionamos los datos desde la database
export const paginaListar = async (req, res) =>{

        //insertamos el dato en nuestra base de datos de mongoDB
        try{

            await client.connect();
    
            const db = client.db(BASEMONGO_LOCAL);
    
            const persona = await db.collection('Personas').find({}).toArray();

            console.log('======================================');
            console.log(persona);
            console.log('======================================');
    
            //client.close();

            res.render('listarContactos', {
                persona: persona,
                style: 'clases.css',
            })
    
        } catch(error){
            console.log('Error al conectar a la base de datos', error);
        }finally {
            await client.close();
        }


}


export const paginaBorrar = async (req, res) => {

    const id = new ObjectId(req.body.id);

    console.log(id);

    try{

        await client.connect();

        const db = client.db(BASEMONGO_LOCAL);

        const persona = await db.collection('Personas').findOneAndDelete({_id: id});

        console.log(persona);

        res.render('contacto', {
            style: 'contacto.css'
        });

    } catch(error){
        console.log('Error al conectar a la base de datos', error);
    }finally {
        await client.close();
    }


}

//función para actualizar los datos del contacto
export const paginaActualizar = async (req, res) => {

    //el _id es un objeto de mongoDB y lo que viene del front es un string
    const id = new ObjectId(req.body.id);

    console.log(id);

    try{

        await client.connect();

        const db = client.db(BASEMONGO_LOCAL);

        const persona = await db.collection('Personas').findOne({_id: id});

        console.log('======================================');
        console.log(persona);
        console.log('======================================');

        res.render('editarContactos', {
            persona: persona,
            style: 'clases.css',
        })

    } catch(error){
        console.log('Error al conectar a la base de datos', error);
    }finally {
        await client.close();
    }


}


export const paginaActualizado = async (req, res) => {

    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = parseInt(req.body.telefono);
    const email = req.body.email;
    const id = new ObjectId(req.body.id);
    
    console.log(id);
    
    const datoMongoDb = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email: email
    }

    try{

        await client.connect();

        const db = client.db(BASEMONGO_LOCAL);

        const persona = await db.collection('Personas').updateOne({_id: id}, {$set: datoMongoDb});

        console.log(persona);

        res.render('index')

    } catch(error){
        console.log('Error al conectar a la base de datos', error);
    }finally {
        await client.close();
    }



}


export const eliminado = (id) => {
}

//Sólo un export default por archivo
//export default paginaBorrar;
//export default paginaActualizar;

// export desestructurado
/* export {
    paginaContacto,
    paginaFormulario,
    paginaListar,
    paginaBorrar,
    paginaActualizar,
    paginaActualizado
} */