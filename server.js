
//importar o módulo express
const express = require('express');

//Importar as Rotas de Usuário
const clientRoutes = require('./src/routes/clientRoutes.js');
//Importar as Rotas de Produto
const productRoutes = require('./src/routes/productRoutes.js');


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
//Usando rotas de produto
app.use('/api/products', productRoutes);

//inicia o servidor
app.listen(porta, () =>{
    console.log(`servidor rodando em http://localhost:${porta}`);
})

