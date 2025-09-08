const products = require('../model/productModel');


const getAllProducts = (req, res) => {
    const users = clientModel.findAll();
    res.status(200).json(users);
}

//Método do controlador para obter um usuário por ID
const getProductById = (req, res) => {
    
    //Pegando o id que foi enviado na requisição
    const id = parseInt(req.params.id);

    //Chamando o método findByI do userModel
    const product = productModel.findByID(id);

    if(product){
        //Responder cm status doe de 200(SUCESSO!)
        //e devolver os dados do usuário em formato JSON
        res.status(200).json(product);
    }else{
        res.status(404).json({mensagem: ' Produto não encontrado no banco de dados!'});
    }

};

//Método do controlador para obter um usuário por ID
const getProductByName = (req, res) => {
    
    //Pegando o nome que foi enviado na requisição
    const name = req.params.name;

    //Chamando o método findByName do userModel
    const product = productModel.findByName(name);

    if(product){
        //Responder cm status doe de 200(SUCESSO!)
        //e devolver os dados do usuário em formato JSON
        res.status(200).json(product);
    }else{
        res.status(404).json({mensagem: ' Cliente não encontrado no banco de dados!'});
    }

};

//método do controlador para criar um novo usuário
const createProduct = (req, res) => {
    //Pegando os dados que foram enviados pelo Body (corpo) da requisição
    const { name, descricao, preco, categoria,  estoque, ativo} = req.body;
    //Validar se foram enviados
    if(!name || !descricao || !preco|| !categoria || !estoque || !ativo){
        return res.status(400).json({mensagem: 'Nome e Email são obrigatórios'});
    }else{
        const newProduct = clientModel.createClient({ name, descricao, preco, categoria, estoque, ativo});
        res.status(201).json(newProduct);
    }
};

//método do controlador para atualizar um cliente

// método do controlador para atualizar um cliente
const updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedData = req.body;

    const Product = productModel.updateProduct(id, updatedData);

    if (Product) {
        res.status(200).json(Product);
    } else {
        res.status(404).json({ mensagem: 'Produto não encontrado no banco de dados!' });
    }
};

// método do controlador para deleter um cliente
const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);

    const product = productModel.deleteProduct(id);

    if (product) {
        res.status(200).json({ mensagem: 'Produto removido com sucesso!', product: product });
    } else {
        res.status(404).json({ mensagem: 'Produtoo não encontrado no banco de dados!' });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    getProductByName,
    createProduct,
    updateProduct,
    deleteProduct
}
