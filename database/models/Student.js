const Sequelize = require('sequelize');
const db = require('../dbinit');

const Student = db.sequelize.define('student', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    gpa: {
        type: Sequelize.FLOAT,
        validate: {
            len: [0.0, 4.0]
        }
    }
})

module.exports = Student;