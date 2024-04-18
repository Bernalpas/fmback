
import { validationResult } from "express-validator";

const formularioRegistro = (req, res) => {
    res.render('registroUsuario');
};

const registrarUsuario = (req, res) => {

    const controlError = validationResult(req);
    
    const { nombre, email, password } = req.body;

    if(!controlError.isEmpty()) {
        return res.render('error', {
            errores: 'Error en los datos ingresados'
        });
    }


    console.log(nombre, email, password);

    console.log(req.body);


    res.json({msg: 'Recibido'});
}


export {
    formularioRegistro,
    registrarUsuario
};  


