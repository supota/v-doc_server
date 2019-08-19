'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize('supota', 'root', 'root', {
    dialect: 'mysql'
});

module.exports = {
    database: sequelize,
    Sequelize: Sequelize
};