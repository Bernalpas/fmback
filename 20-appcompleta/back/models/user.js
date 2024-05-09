
const mongoose = require("mongoose");
const { Schema } = require("mongoose");

//esta es la estructura de un documento en la colección de usuarios
//máximo es de 16 megas
const usuarioSchema = new Schema({
    nombre:{
        type: String, //varchar(50)
        required: true //not null
    },
    apellido:{
        type: String, //varchar(50)
        required: true //not null
    },
    email:{
        type: String,
        required: true,
        unique: true //no puede existir otro usuario con el mismo email
    },
    telefono:{
        type: Number, //varchar(50)
        required: true //not null
    },
    provincia:{
        type: String, //varchar(50)
        required: true //not null
    },
    password:{
        type: String,
        required: true
    },
    consulta:{
        type: String, //varchar(50) //not null
    },
    timestamp: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema); //exportar el modelo de usuario