const express = require('express');
const morgan = require('morgan');
const app = express();

//rutas requeridas
const routes = require('./routes');
const routesApi = require('./routes-api');

//ajustes
app.set('appName', 'First Server');
app.set('views', __dirname + '/views')
//console.log(__dirname + '/views');

app.set('view engine', 'ejs');

//middlewares
app.use(morgan('combined'));

/*app.use(function(req, res, next) {
  console.log('request url:' + req.url);
  next();
});

app.use((req, res, next) => {
  console.log('Función utilizada');
  next();
});*/

//rutas

app.use(routes);
app.use('/api', routesApi);

app.get('*', (req, res) => {
  res.end('Archivo no encontrado');
});
/*app.get('/', (req, res) => {
  res.end('HELLO WORLD!!');
});*/
/*
app.get('/', (req, res) => {
  res.render('index.ejs');
});

/*app.get('/login', (req, res) => {
  res.end('Aquí va el login!!!');
});*/
/*
app.get('/login', (req, res) => {
  res.render('login');
});

app.get('*', (req, res) => {
  res.end('Archivo no encontrado');
});*/

app.listen(3000, function () {
  console.log('SERVIDOR FUNCIONANDO')
  console.log('Nombre de la APP:', app.get('appName'));
});
