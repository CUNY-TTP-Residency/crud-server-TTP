const Sequelize = require('sequelize');
const db = require('../dbinit');

const Campus = db.sequelize.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },

    imgUrl: {
        type: Sequelize.STRING,
        defaultValue: "https://th.bing.com/th/id/OIP.MzaYsaBOJ3JeXj593w2w1QHaE7?pid=Api&rs=1"
    },

    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },

    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

module.exports = Campus;