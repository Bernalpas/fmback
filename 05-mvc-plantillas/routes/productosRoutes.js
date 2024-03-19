const express = require('express');

//instanciamos un enrutador
const router = express.Router();

//importamos el controlador
const productosController = require('../controllers/productosController');

const {
    postProducto,
    putProducto,
    getProductosId,
    deleteProducto,
} = require('../controllers/productosController');

//traemos la info de la database
//const productos = require('../model/productos');

//get productos
router.get('/listar', productosController.getProductos);

router.get('/listar/:id', getProductosId);

router.post('/guardar', postProducto);

router.put('/modificar', putProducto);

router.delete('/borrar/:id', deleteProducto);


module.exports = router;