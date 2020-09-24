const express = require('express');

const UserController = require('./controllers/UserController')
const AddressesController = require('./controllers/AddressesController')
const ProdutosController = require('./controllers/ProdutosController')

const routes = express.Router();

//routes.post('/login', UserController.login)
routes.post('/cadastro', UserController.store) //Cadastra um user
routes.get('/users/all', UserController.index) //Lista todos os users
routes.put('/users/:id/update', UserController.update) //Edita informações de um user
routes.delete('/users/:id/delete', UserController.delete) //Deleta um User

routes.get('/users/:user_id/addresses', AddressesController.index)
routes.post('/users/:user_id/addresses', AddressesController.store)

routes.get('/users/:user_id/produtos', ProdutosController.indexuser) //Mostra produtos pelo Id do user
routes.get('/produtos/name/:name', ProdutosController.index) //Usado na busca por produtos
routes.get('/produtos/id/:id', ProdutosController.indexid) //Mostra informações do produto pelo id do produto
routes.get('/produtos', ProdutosController.all) //Lista todos os produtos
routes.post('/users/:user_id/produtos/create', ProdutosController.store) //Cria um produto com o id do user
routes.put('/produtos/:id/update', ProdutosController.update) //Edita um produto
routes.delete('/produtos/:id/delete', ProdutosController.delete) //Deleta um produto

module.exports = routes;