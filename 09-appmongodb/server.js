
//import del servidor
import app from './index.js';
import dotenv from 'dotenv';
dotenv.config();

import conectarDB from './models/config.js';

const PORT = process.env.PORT || 3000;

//conexión a la base de datos de MongoDB
conectarDB();

const server = app.listen(PORT, () =>{
    console.log(`Server listening en new file 'Server' on http://localhost:${PORT}`);
});
