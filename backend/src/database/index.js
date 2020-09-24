const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Addresses = require('../models/Addresses');
const Produtos = require('../models/Produtos');

const connection = new Sequelize(dbConfig);

User.init(connection);
Addresses.init(connection);
Produtos.init(connection);

Addresses.associate(connection.models);
User.associate(connection.models);

module.exports = connection;