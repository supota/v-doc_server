'use strict';

const loader = require('./sequelize');
const Sequelize = loader.Sequelize;

const Player = loader.database.define('users', {
    playerId: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
    },
    playerName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        alloNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = Player;