// importar bibliotecas
const express = require('express'); //jala la biblioteca express constante (uso sin cambios)

const path = require('path'); //ruta donde se almacenan los archivos y permite hacer join de rutas

//const cores = require('cores'); //en este caso no se usa
const app = express(); // método que genera una app de express 

//middleware (pre-procesa peticiones y luego la manda osease interpreta)
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')));

//Definición de la aplicación web
app.get('/prueba', (request, response) => {
    //Se define comportamiento
    console.log('Hola Mundo');
    response.send('<h1>Hola Mundo<h1>'); 
}); //se especifica (ruta, (arrow function se define request y response))

app.get('/aboutme', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'aboutme.html'));
})


//GET --> pedimos recursos directamente al servidor
//Función para mandar un archivo directo
// '/' --> especifica el route
/*app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'pagina.html'));
})*/


//prueba query
/*app.get('/query', (req, res) =>{
    console.log(req.query)
    res.send("Datos enviados por query: "+ req.query.name)
})

//prueba params
app.get('/params/:name/:age', (req, res) =>{
    console.log(req.params)
    console.log(req.query)
    res.send("Datos enviados por params: "+ req.params.name)
})*/

//lanzar una nueva ruta
app.post('/prueba3',(req,res)=> {
    console.log(req.body);
    res.send("Datos recibidos");
})

//Lanzar la aplicación
app.listen(8080, () => {
    console.log('Servidor en línea');
}); //recibe el puerto donde se va a ejecutar la app y un callback (arrow function)

