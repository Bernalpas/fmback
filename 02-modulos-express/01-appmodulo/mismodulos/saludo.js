
let selecciones = ['Aregentina', 'Brasil', 'Venezuela', 'Paraguay']

//ES5
for (let i = 0; i < selecciones.length; i++) {
    console.log(selecciones[i]);
}

console.log('\n================================');

//ES6
for(let seleccion of selecciones){
    console.log(seleccion);
}


const saludo = () => console.log('Hola Gente de la UTN');


//exportar mis módulos es una variable  sólo uno - ES5
//module.exports = selecciones;

//2. exportar todos
module.exports = {
    selecciones, 
    saludo
} 

//module.exports = saludo;

//exports.selecciones = selecciones;