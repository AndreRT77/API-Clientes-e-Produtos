

const express = require ('express');

const router = express.Router();

const clientController = require('../controller/clientcontroller');

//Criando as rotas da nossa API

//1ºRota para obter todos os clientes
router.get('/', clientController.getAllClients );

//2ºRota para obter dados de um cliente por ID
router.get('/id/:id', clientController.getClientById);

//3ºRota para obter dados de um cliente por Nome
router.get('/name/:name', clientController.getClientByName);

//4º Rota para criar um novo cliente

router.post('/', clientController.createClient);

//5º Rota para editar um cliente
router.put('/id/:id', clientController.updateClient);

//6º Rota para excluir um cliente
router.delete('/id/:id', clientController.deleteClient);


module.exports = router;