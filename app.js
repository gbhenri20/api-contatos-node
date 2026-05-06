const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const middlewareError = require('./errors/errors');

dotenv.config();

const app = express();

app.use(express.json());

// Rotas
const contatoRouter = require('./routes/contatoRoutes');
app.use('/contatos', contatoRouter);

// Middleware de erro (deve vir depois das rotas)
app.use(middlewareError);

// Conexão com MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conectado ao MongoDB Atlas!');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });

// 👇 ESSENCIAL PARA OS TESTES
module.exports = app;