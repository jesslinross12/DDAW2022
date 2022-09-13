const path = require("path");
const {validatePalin, validateF} = require('../utilities/utilities.js')

exports.postPalindromo = ( req, res) => {
    res.send('<h2>'+validatePalin(req.body.entrada)+'</h2>');
}

exports.postF = ( req, res) => {
    res.send('<h2>'+validateF(req.body.entradaF)+'</h2>');
}