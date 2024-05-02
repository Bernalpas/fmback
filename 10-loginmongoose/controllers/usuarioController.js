
import { validationResult } from "express-validator";

//importamos el modelo del Usuario
import User from '../models/usuarioModel.js';

//importamos el encriptador del password
import bcrypt from "bcrypt";

//importamos el envio de mail
import enviarMail from '../servicios/enviarMail.js';

//importamos el generador de token
import generarJWT from '../middlewares/generarJWT.js';


const formularioRegistro = (req, res) => {
    res.render('registroUsuario');
};

const registrarUsuario = async (req, res) => {

    const controlError = validationResult(req);
    
    const { nombre, email, password } = req.body;
    
    const persona = {
        nombre: nombre,
        email: email,
        password: password
    };
    
    console.log(`1. ${persona.email}`);

    if(!controlError.isEmpty()) {
        return res.render('error', {
            errores: '1. Error en los datos ingresados'
        });
    }

    try {
        
        //buscar si el email ya está registrado
        let usuario = await User.findOne({ email });

        console.log(`2. ${usuario}`);

        //respondemos en caso que sea true
        if(usuario){
            return res.render('error', {
                errores: '3. El email ya está registrado'
            });

        }else{
            //si el mail no existe
            //creamos un nuevo usuario
            usuario = new User(req.body);

            //creamos el salt para encriptar el password
            const salt = await bcrypt.genSalt(10);

            console.log(`3. ${salt}`);

            //encriptamos el password
            usuario.password = bcrypt.hashSync(password, salt);

            console.log(`4. ${usuario.password}`);
    
            //guardamos el usuario en la base de datos
            await usuario.save();

            //generamos el token
            const token = await generarJWT(usuario);

            //imprimimos el token
            console.log(`5. ${token}`);

            //enviamos el token al usuario registrado
            res.header('x-auth-token', token);

            //enviamos un mail al usuario registrado
            enviarMail(usuario.email, usuario.nombre).catch(console.error);
    
            return res.render('usuarioToken', {
                token: token,
            });

        }


    } catch (error) {
        console.log(error);
        res.render('error', {
            errores: '4. Error al registrar el usuario'
        });
    }


}

const loginUsuario = async (req, res) => {

    const controlError = validationResult(req);

    const { email, password } = req.body;

    if(!controlError.isEmpty()) {
        return res.render('error', {
            errores: '1. Error en los datos ingresados'
        });
    }

    try {
        
        //buscar si el email ya está registrado
        const usuario = await User.findOne({ email: email });

        console.log(`2. ${usuario}`);

        //respondemos en caso que sea true
        if(!usuario){
            return res.render('registroUsuario', {
                errores: '3. El email no está registrado, favor Registrarse'
        });
        }else{

            console.log(`4. ${usuario.password}`);

            //comparamos el password ingresado con el password encriptado
            const match = await bcrypt.compare(password, usuario.password); 

            console.log(`5. ${match}`);

            if(!match){
                return res.render('error', {
                    errores: '6. Password y/o email incorrecto'
                });
            }

            //generamos el token
            const token = await generarJWT(usuario);

/*             res.json({
                msg: 'Usuario logueado correctamente',
                usuario: usuario,
                match: match
            }); */

            res.render('contacto', {
                nombre: usuario.nombre,
                token: token
            });
        }

    } catch (error) {
        console.log(error);
        res.render('error', {
            errores: '4. Error al registrar el usuario'
        });
    }

}

const usuarioAdmin = (req, res) => { 

    const user = req.user;

    console.log(user);


    res.render('contacto', { nombre: user.nombre });
}

export {
    formularioRegistro,
    registrarUsuario,
    loginUsuario,
    usuarioAdmin
};  


