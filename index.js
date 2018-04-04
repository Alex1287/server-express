const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.end('HELLO WORLD!!');
});

app.get('/login', (req, res) => {
  res.end('Aquí va el login!!!');
});

app.get('*', (req, res) => {
  res.end('Archivo no encontrado');
});

app.listen(3000, function () {
  console.log('SERVIDOR FUNCIONANDO')
});
