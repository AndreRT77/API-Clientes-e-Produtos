const clientModel = require('../model/clientmodel');


const getAllClients = (req, res) => {
    const users = clientModel.findAll();
    res.status(200).json(users);
}

//Método do controlador para obter um usuário por ID
const getClientById = (req, res) => {
    
    //Pegando o id que foi enviado na requisição
    const id = parseInt(req.params.id);

    //Chamando o método findByI do userModel
    const client = clientModel.findByID(id);

    if(client){
        //Responder cm status doe de 200(SUCESSO!)
        //e devolver os dados do usuário em formato JSON
        res.status(200).json(client);
    }else{
        res.status(404).json({mensagem: ' Cliente não encontrado no banco de dados!'});
    }

};

//Método do controlador para obter um usuário por ID
const getClientByName = (req, res) => {
    
    //Pegando o nome que foi enviado na requisição
    const name = req.params.name;

    //Chamando o método findByName do userModel
    const client = clientModel.findByName(name);

    if(client){
        //Responder cm status doe de 200(SUCESSO!)
        //e devolver os dados do usuário em formato JSON
        res.status(200).json(client);
    }else{
        res.status(404).json({mensagem: ' Cliente não encontrado no banco de dados!'});
    }

};

//método do controlador para criar um novo usuário
const createClient = (req, res) => {
    //Pegando os dados que foram enviados pelo Body (corpo) da requisição
    const { name, email, telefone, endereço, dataCadastro, ativo} = req.body;

    //Validar se foram enviados
    if(!name || !email || !telefone || !endereço || !dataCadastro || !ativo){
        return res.status(400).json({mensagem: 'Nome e Email são obrigatórios'});
    }else{
        const newClient = clientModel.createClient({ name, email, telefone, endereço, dataCadastro, ativo});
        res.status(201).json(newClient);
    }
}

module.exports = {
    getAllClients,
    getClientById,
    getClientByName,
    createClient,
}
