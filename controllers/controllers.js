const path = require("path");

const model = require('../models/models.js')

exports.postPalindromo = ( req, res) => {
    console.log(req.body.entrada);
    res.json({estado: "Exitoso"});
}

exports.getPalindromo = ( req, res) => {
    res.send('<h1>Datos de las consolas</h1>');
}