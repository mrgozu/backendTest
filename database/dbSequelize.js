require('dotenv').config();
const { Sequelize } = require('sequelize');

const database = process.env.databaseOrm;
const username = process.env.userDB;
const password = process.env.passwordDB;
const host = process.env.hostDB;
const port = process.env.portDB;

const sequelize = new Sequelize(database,username,password,{
    host,
    dialect:'postgres',
    port,
    // logging:false, 
});

module.exports=sequelize;