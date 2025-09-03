//Simulação de Banco de Dados
let clients = [
    { 
        id: 1, 
        name: 'Heike', 
        email: 'Draconian@gmail.com', 
        telefone: '(11) 00000-1111', 
        endereço: 'Rodovia Raposo Tavares 321, Lageadinho, Cotia, SP, 06709015', 
        dataCadastro: '23/04/2015 14:50', 
        ativo: true 
    },
    { 
        id: 2, 
        name: 'Aleah', 
        email: 'Treesofeternity@gmail.com', 
        telefone: '(11) 00000-2222', 
        endereço: 'Rua das Flores 123, Jardim das Rosas, São Paulo, SP, 01234056', 
        dataCadastro: '15/05/2016 09:30', 
        ativo: true 
    },
    { 
        id: 3, 
        name: 'Mikael', 
        email: 'Opeth@gmail.com', 
        telefone: '(11) 00000-3333', 
        endereço: 'Avenida Paulista 456, Bela Vista, São Paulo, SP, 01310100', 
        dataCadastro: '10/08/2017 16:20', 
        ativo: false 
    },
    { 
        id: 4, 
        name: 'Jonas', 
        email: 'Katatonia@gmail.com', 
        telefone: '(11) 00000-4444', 
        endereço: 'Rua do Comércio 789, Centro, Osasco, SP, 06010020', 
        dataCadastro: '22/03/2018 11:45', 
        ativo: true 
    }
];

//Função para listar todos os clientes
const findAll = () => {
    return clients;
};

//Função para buscar um cliente por ID
const findByID = (id) => {
    return clients.find(client => client.id === id);
};

//Função para buscar um cliente pelo nome
const findByName = (name) =>{
    return clients.find(client => client.name === name);
}


//Função para criar um novo cliente
const createClient = (newClient) => {
    const newId = clients.length > 0 ? clients[clients.length - 1].id + 1 : 1;
    const userWithId = {id: newId, ...newClient}
    clients.push(userWithId);
    return userWithId;
};
// Função para atualizar cliente
const updateClient = (id, updatedData) => {
    const index = clients.findIndex(client => client.id === id);
    if (index !== -1) {
        clients[index] = { ...clients[index], ...updatedData, id };
        return clients[index];
    }
    return null;
};

// Função para deletar cliente
const deleteClient = (id) => {
    const index = clients.findIndex(client => client.id === id);
    if (index !== -1) {
        const deleted = clients.splice(index, 1);
        return deleted[0];
    }
    return null;
};
module.exports =  {
    findAll,
    findByID,
    findByName,
    createClient,
    updateClient,
    deleteClient
}