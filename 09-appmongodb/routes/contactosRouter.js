import express from 'express';

const router = express.Router();

import {  
    paginaContacto,
    paginaFormulario,
    paginaListar,
    paginaBorrar,
    paginaActualizar,
    paginaActualizado
    } from '../controllers/contactosController.js';


router.get('/', paginaContacto);

router.get('/listar', paginaListar);

router.post('/formulario', paginaFormulario);

router.post('/borrar', paginaBorrar)

router.post('/actualizar', paginaActualizar);

router.post('/actualizado', paginaActualizado);


export default router;