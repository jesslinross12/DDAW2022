const express = require('express'); //se necesita express 
const router = express.Router(); //mini aplicación que se envía a la aplicación principal
const consolaController = require('../controllers/controllers'); //importas controllers


//Servicio para procesar los datos del formulario
router.post('/formularioPalindromo', consolaController.postPalindromo);

//Servicio para consultar todos los datos
router.get('/consultaConsola', consolaController.getConsultaConsola)

module.exports = router;
