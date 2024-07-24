require('dotenv').config()
const CONNECTION_STRING = "postgresql://postgres:admin@localhost:5432/social_mountain"
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
 })
 
 module.exports = {
    sequelize
 }