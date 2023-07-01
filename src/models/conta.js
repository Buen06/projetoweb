const Sequelize = require('sequelize');
const database = require('../db');
 
const Conta = database.define('conta', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    numeroConta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    data_aber: {
        type: Sequelize.DATE
    },
    saldo: {
        type: Sequelize.DOUBLE
    },
})
 
module.exports = Pessoa;