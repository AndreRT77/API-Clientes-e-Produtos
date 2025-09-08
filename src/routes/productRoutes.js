

const express = require ('express');

const router = express.Router();

const productController = require('../controller/productController');

//Criando as rotas da nossa API

//1ºRota para obter todos os clientes
router.get('/', productController.getAllProducts );

//2ºRota para obter dados de um cliente por ID
router.get('/id/:id', productController.getProductById);

//3ºRota para obter dados de um cliente por Nome
router.get('/name/:name', productController.getProductByName);

//4º Rota para criar um novo cliente

router.post('/',productController.createProduct);

//5º Rota para editar um cliente
router.put('/id/:id', productController.updateProduct);

//6º Rota para excluir um cliente
router.delete('/id/:id', productController.deleteProduct);


module.exports = router;