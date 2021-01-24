const Sequelize = require('sequelize');
const db = require('../dbinit');

const Student = db.sequelize.define('student', {
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },

    lastname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },

    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
            notEmpty: true,
        }
    },

    imgUrl: {
        type: Sequelize.STRING,
        defaultValue: "https://th.bing.com/th/id/OIP.MoLuogvKSS_uEhep5nvcuQHaID?w=166&h=181&c=7&o=5&pid=1.7"
    },

    gpa: {
        type: Sequelize.FLOAT,
        validate: {
            max: 4,
            min: 0,
            isFloat: true
        }
    }
})

module.exports = Student;