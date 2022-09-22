const path = require("path");

exports.postTriangle = ( req, res) => {
    let arr = []
    var sum = 0;
    arr.push(req.body['A']);
    arr.push(req.body['B']);
    arr.push(req.body['C']);
    console.log(req.body); //los post van en el body
    for(var i =0; i<arr.length; i++){
        suma += arr[i];
    }

    if (sum == 180){
        res.json({trianguloRect:"positivo"});
    }else{
        res.json({trianguloRect:"negativo"});
    }
}
