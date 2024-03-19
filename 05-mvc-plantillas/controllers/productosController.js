
//traemos la info de la database
const productos = require('../model/productos');


//obtenemos todos los productos
const getProductos = (req, res) => {
    res.json(productos);
}

//obtenemos un producto por el id
const getProductosId = (req, res) => {

    //recibio y guardo el id del producto
    const id = Number(req.body.id);

    const productoBuscado = productos.find(producto => producto.id === id);

    if(!productoBuscado){
        res.status(404).end()
    }else{
        res.status(200).json(productoBuscado);
    }

}

//guerdamos un producto
const postProducto = (req, res) => {

    console.log('Buenas Producto');

    const productoNuevo = { id, title, price, description, category, image, rating } = req.body;

    console.log(productoNuevo);

    productos.push(productoNuevo);

    res.json({
        id: id, 
        title: title, 
        price: price, 
        description: description, 
        category: category, 
        image: image, 
        rating: rating
    })
}

//actualizamos un producto
const putProducto = (req, res) => {
    res.json(productos);
}

//eliminamos un producto
const deleteProducto = (req, res) => {
    res.json(productos);
}

//exportamos los módulos
module.exports = {
    getProductos,
    getProductosId,
    postProducto,
    putProducto,
    deleteProducto,
}

