const express = require('express');

//instanciamos un enrutador
const router = express.Router();

//traemos la info de la database
const clientes = require('../model/clientes');

//get productos
router.get('/', (req, res) => {
    res.json(clientes);
});

router.post('/clientes', (req, res) => {
    res.json(productos);
});

router.put('/clientes', (req, res) => {
    res.json(productos);
});

router.delete('/clientes', (req, res) => {
    res.json(productos);
});


module.exports = router;