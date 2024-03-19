

//Middelwares: funciones que se ejecutan antes de que lleguen a las rutas
//1. Una forma
const middleUno = (req, res, next) => {

    console.log('===============================================');
    console.log('Hola Gente son el Middelwares UNO');
    console.log('===============================================');

    next();
};

module.exports = middleUno;


/* module.exports = { 
    middleUno,
} */