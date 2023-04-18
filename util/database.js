const Sequelize = require('sequelize');

const sequelize = new Sequelize('testdb','root','abhay@26', {
    dialect : 'mysql',
    host : 'localhost'
})

module.exports = sequelize;