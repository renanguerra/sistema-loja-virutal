'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('produtos', { 
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    
    user_id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {model: 'users', key: 'id'},
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },

    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },

    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    
    image: {
      type: Sequelize.STRING, //SÓ ASSIM NÃO VAI FUNCIONAR, PESQUISAR COMO UPAR IMAGENS
      allowNull: true,
    },

    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },

    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });
 
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('produtos');

  }
};
