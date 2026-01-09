const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Olá Professor Gustavo! O Pipeline funcionou!');
});

app.get('/health', (req, res) => {
  res.status(200).send('Estou vivo!');
});

app.listen(3000, () => {
  console.log('App rodando na porta 3000');
});
