
//importamos la conexion a la base de datos
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

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

        db.collection('Personas').insertOne(Persona);

        //client.close();

    } catch(error){
        console.log('Error al conectar a la base de datos', error);
    }

    
    res.render('datosCargados')


}

//Seleccionamos los datos desde la database
export const paginaListar = (req, res) =>{

    
    res.render('listarContactos',{
        style: 'clases.css',
    })

}


export const paginaBorrar = (req, res) => {

    const id = req.body.idPersona;

    console.log(id);

    //const { idPersona } = req.body;
    //console.log(idPersona);

    //guardo la info del elemento a eliminar
    eliminado(id);

    res.render('contacto', {
        style: 'contacto.css'
    });

}

//función para actualizar los datos del contacto
export const paginaActualizar = (req, res) => {

    const id = req.body.idPersona;

    res.render('editarContactos', {
        style: 'clases.css',
    })

}


export const paginaActualizado = (req, res) => {

    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = parseInt(req.body.telefono);
    const email = req.body.email;
    const id = req.body.idPersona;

    console.log(id);

    

    const datoMongoDb = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email: email
    }

    console.log(datoMongoDb);

    res.render('index')

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