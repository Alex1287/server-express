const express = require('express');
const router = express.Router();

//rutas
/*app.get('/', (req, res) => {
  res.end('HELLO WORLD!!');
});*/

router.get('/', (req, res) => {
  res.render('index.ejs');
});

/*app.get('/login', (req, res) => {
  res.end('Aquí va el login!!!');
});*/

router.get('/login', (req, res) => {
  res.render('login');
});

/*router.get('*', (req, res) => {
  res.end('Archivo no encontrado');
});*/

module.exports = router;
