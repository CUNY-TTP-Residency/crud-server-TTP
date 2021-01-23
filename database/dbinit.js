const { Sequelize } = require('sequelize');
require('dotenv').config();

sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: true
    }
});

const testDatabase = async () => {
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }catch(err){
        console.error('Unable to connect', err);
    }
}

testDatabase();

module.exports = { sequelize };