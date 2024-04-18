
import { check } from 'express-validator';
import { Router } from 'express';

const router = Router();

import { 
    formularioRegistro,
    registrarUsuario
} from '../controllers/usuarioController.js';


router.get('/registro', formularioRegistro);

router.post('/registro', [
    check('nombre').isLength({min: 3}).withMessage('El nombre debe tener al menos 3 caracteres'),
    check('email').isEmail().withMessage('El email no es válido'),
    check('password').isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres')
], registrarUsuario);



router.get('/login', (req, res) => { 
    res.render('registro', {
        style: 'registro.css'
    });
});


router.post('/login', (req, res) => {
    console.log(req.body);
    res.send('Recibido');
});

export default router;

