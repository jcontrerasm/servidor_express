// importar
var express = require('express');

// instanciar
var app = express();

app.use('/static', express.static(__dirname + '/proyecto_cookies/public'));

app.get('/', function(req, res){
  res.sendfile(__dirname + '/proyecto_cookies/index.html');
});

app.get('/galeria', function(req, res){
  res.sendfile(__dirname + '/proyecto_cookies/galeria.html');
});

app.get('/nosotros', function(req, res){
  res.sendfile(__dirname + '/proyecto_cookies/nosotros.html');
});

app.get('/contacto', function(req, res){
  res.sendfile(__dirname + '/proyecto_cookies/contacto.html');
});

//app.get('/index', function(req, res){
  //res.sendfile(__dirname + '/proyecto_prueba/index.html');
//});

//app.get('/json', function(req, res){
  //res.contentType('application/json');
  //res.sendfile(__dirname + '/api/data.json');
//});
 
// escuchar
app.listen(9000);
 
console.log("Servidor Express escuchando en modo %s", app.settings.env);