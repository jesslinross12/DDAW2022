const express = require('express'); //se necesita express 
const router = express.Router(); //mini aplicación que se envía a la aplicación principal
const consolaController = require('../controllers/consola'); //importas controllers

//CRUD --> Create Read Update Delete o ABCC Altas Bajas Cambios Consultas

//Servicio para mostrar el formulario
router.get('/altaConsola', consolaController.getAltaConsola);

//Servicio para procesar los datos del formulario
router.post('/altaConsola', consolaController.postAltaConsola);

//Servicio para consultar todos los datos
router.get('/consultaConsola', consolaController.getConsultaConsola)

module.exports = router;
