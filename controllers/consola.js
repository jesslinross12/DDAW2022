const path = require("path");

//Proceso cuando se llama a la ruta
exports.getAltaConsola = ( req, res) => {
    res.sendFile(path.join(__dirname,'..' ,'views', 'formulario.html'));
}

exports.postAltaConsola = ( req, res) => {
    console.log(req.body);
    res.json({estado: "Exitoso"});
}

exports.getConsultaConsola = ( req, res) => {
    res.send('<h1>Datos de las consolas</h1>');
}