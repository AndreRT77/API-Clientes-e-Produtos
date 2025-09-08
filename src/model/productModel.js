//Simulação de Banco de Dados
let products = [
        {
            id: 1,
            name: "Notebook",
            descricao: "Notebook com processador Intel Core i5, 8GB RAM, SSD 256GB",
            preco: 25.90,
            categoria: "Informática",
            estoque: 12,
            ativo: true
        },
        {
            id: 2,
            name: "Smartphone",
            descricao: "Smartphone com tela AMOLED 6.5 polegadas, 128GB de armazenamento",
            preco: 299.99,
            categoria: "Eletrônicos",
            estoque: 25,
            ativo: true
        },
        {
            id: 3,
            name: "Cadeira Ergonômica",
            descricao: "Cadeira de escritório com ajuste de altura e suporte lombar",
            preco: 150.00,
            categoria: "Móveis",
            estoque: 10,
            ativo: true
        },
        {
            id: 4,
            name: "Fone de Ouvido Bluetooth",
            descricao: "Fone de ouvido sem fio com cancelamento de ruído",
            preco: 79.90,
            categoria: "Acessórios",
            estoque: 40,
            ativo: true
        },
        {
            id: 5,
            name: "Livro Técnico",
            descricao: "Livro sobre fundamentos de programação em Python",
            preco: 45.00,
            categoria: "Livros",
            estoque: 60,
            ativo: true
        }
   
];

//Função para listar todos os clientes
const findAll = () => {
    return products;
};

//Função para buscar um cliente por ID
const findByID = (id) => {
    return products.find(product => product.id === id);
};

//Função para buscar um cliente pelo nome
const findByName = (name) =>{
    return products.find(product => product.name === name);
}


//Função para criar um novo cliente
const createProduct = (newProduct) => {
    const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
    const userWithId = {id: newId, ...newProduct}
    products.push(userWithId);
    return userWithId;
};
// Função para atualizar cliente
const updateProduct = (id, updatedData) => {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products[index] = { ...products[index], ...updatedData, id };
        return products[index];
    }
    return null;
};

// Função para deletar cliente
const deleteProduct = (id) => {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        const deleted = products.splice(index, 1);
        return deleted[0];
    }
    return null;
};
module.exports =  {
    findAll,
    findByID,
    findByName,
    createProduct,
    updateProduct,
    deleteProduct
}