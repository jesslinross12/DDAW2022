// importar bibliotecas
const express = require('express'); //jala la biblioteca express constante (uso sin cambios)

const path = require('path'); //ruta donde se almacenan los archivos y permite hacer join de rutas

//const cores = require('cores'); //en este caso no se usa
const app = express(); // método que genera una app de express 

const consolaRoutes = require('./routes/routes');

//middleware (pre-procesa peticiones y luego la manda osease interpreta)
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

//Middlewares con rutas separadas
app.use(consolaRoutes);

//GET --> pedimos recursos directamente al servidor
//Función para mandar un archivo directo
// '/' --> especifica el route
app.get('/examen/pagina', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'info.html'));
})

//prueba query
app.post('/examen/validacion', (req, res) =>{
    let arr = []
    var suma = 0;
    arr.push(req.body['A']);
    arr.push(req.body['B']);
    arr.push(req.body['C']);
    console.log(req.body);
    for(var i =0; i<arr.length; i++)
        suma += arr[i];
    
    if (suma == 180)
        res.json({triangulo:"positivo"});
    else
        res.json({triangulo:"negativo"});
})

//Lanzar la aplicación
app.listen(8083, () => {
    console.log('Servidor en línea');
}); //recibe el puerto donde se va a ejecutar la app y un callback (arrow function)

