
//importo el arreglo
//const selecciones = require('./mismodulos/saludo.js')

//importo la función saludo
const {  
    selecciones,
    saludo 
} = require('./mismodulos/saludo.js');


//agregar datos al array selecciones que importamos de nuestro módulo saludo
selecciones.push("Chile", "Perú");

console.log(selecciones);

saludo();


/* const pepe = require('./mismodulos/saludo.js')
pepe(); */


console.log('===================================================');
console.log('iMPRIMIMOS EL MODULO DEL ARCHIVO');
console.log('===================================================');

//imprime el dato del módulo
console.log(module);

console.log('===================================================');
console.log('IMPRIMIMOS EL PROCESO DE NODE');
console.log('===================================================');

//imprimit los procesos de Node
console.log(process);
