
//importar o módulo express
const express = require('express');

//Importar as Rotas de Usuário
const clientRoutes = require('./api-clientes/src/routes/clientRoutes');

//criar uma aplicação express
const app = express();

//Definir um Midleware para analisar JSON no corpo das requisições
app.use(express.json());


//Definir a porta em que o servido irá escutar
const porta = 7000;

//Rota de teste de API
app.get('/', (req, res) => {
    res.send ("API de usuários está funcionando");
})

//Usando rotas de usuário
app.use('/api/clients', clientRoutes);

//inicia o servidor
app.listen(porta, () =>{
    console.log(`servidor rodando em http://localhost:${porta}`);
})

