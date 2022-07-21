const { Pool} = require('pg')
require('dotenv').config();

const database = process.env.databasePg;
const username = process.env.userDB;
const password = process.env.passwordDB;
const host = process.env.hostDB;
const port = process.env.portDB;


const pool = new Pool({
  user: username,
  host: host,
  database: database,
  password: password,
  port: port,
})


module.exports = pool;