const express  = require('express');
const { request, response } = require('express');
const router = express.Router();
const User = require('../models/user');

/* esta ruta responde a /users */

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/registro', async (req = request, res= response) => {

    const persona = {
        nombre,
        apellido,
        email,
        telefono,
        provincia,
        password,
        consulta  
    } = req.body;

    persona.telefono = parseInt(persona.telefono);

    console.log(persona);

    try {

      await User.create(persona);

      return res.json({
          persona
      });
      
    } catch (error) {
      console.log(error);
      return res.json({
        Error: 'Error al registrar usuario'
    });
    }


});

module.exports = router;
