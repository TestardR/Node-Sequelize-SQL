const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_academind', 'root', 'root', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
