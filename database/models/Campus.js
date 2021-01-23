const Sequelize = require('sequelize');
const db = require('../dbinit');

const Campus = db.sequelize.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Campus;