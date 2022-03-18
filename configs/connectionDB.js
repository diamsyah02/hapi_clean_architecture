"use strict"

require('dotenv').config()
const knex = require('knex')
const option = {
  client: process.env.DB_CLIENT,
  connection: {
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
  },
  pool: {
    min: 0,
    max: 5
  }
}
const connDb = knex(option)

module.exports = connDb