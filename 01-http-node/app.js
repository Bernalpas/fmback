const http = require('node:http');



const mysql = require('mysql2'); //ES2015

//import mysql from 'mysql'; //ES2016


mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user:'root',
    password: 'berni',
})

if(mysql.connect){
    console.log('Se conectó a mi database');
}


const hostname = '127.0.0.1';
const port = 9000;



const server = http.createServer((req, res) => {

  /*   if(req.url === '/home'){
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World');
    } */
    

  switch (req.url) {
    
    case '/home': ()=>{
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World');
    }
    
    break;
    //case:.....
    default: res.statusCode = 404;
  }


});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});