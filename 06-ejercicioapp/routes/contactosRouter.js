const express = require('express');
const router = express.Router();
const { 
    paginaContacto,
    paginaFormulario,
    paginaListar,
    paginaBorrar
    } = require('../controllers/contactosController');


router.get('/', paginaContacto);

router.get('/listar', paginaListar);

router.post('/formulario', paginaFormulario);

router.post('/borrar', paginaBorrar)


module.exports = router;