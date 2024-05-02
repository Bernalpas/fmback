
import { check } from 'express-validator';
import { Router } from 'express';

//importamos el middleware de verificación de token
import verificarJWT from '../middlewares/verificarJWT.js';

/* 
    esta ruta responde a la url /api/login/
*/
const router = Router();

import { 
    formularioRegistro,
    registrarUsuario, 
    loginUsuario,
    usuarioAdmin
} from '../controllers/usuarioController.js';


router.get('/registro', formularioRegistro);

router.post('/registro', [
    check('nombre').isLength({min: 3}).withMessage('El nombre debe tener al menos 3 caracteres'),
    check('email').isEmail().withMessage('El email no es válido'),
    check('password').isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres')
], registrarUsuario);



router.get('/login', (req, res) => { 
    res.render('loginUsuario', {
        style: 'contacto.css'
    });
});


router.post('/login',[
    check('email').isEmail().withMessage('El email no es válido'),
    check('password').isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres')
], loginUsuario);


router.get('/contacto', verificarJWT, usuarioAdmin);

export default router;

