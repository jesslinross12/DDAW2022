const express = require('express'); //se necesita express 
const router = express.Router(); //mini aplicación que se envía a la aplicación principal
const formController = require('../controllers/controllers'); //importas controllers


//Servicio para procesar los datos del formulario
router.post('/validTriangle', formController.postTriangle);

module.exports = router;
