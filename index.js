"use strict"

const Hapi = require('@hapi/hapi')
const hapiJwt = require('@hapi/jwt');
const routes = require('./routes')
const JwtStrategy = require('./helpers/JwtStrategy');
require('dotenv').config()

const init = async () => {

  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.DB_HOST
  })

  await server.register(hapiJwt)
  JwtStrategy(server)
  server.auth.default('jwt')
  routes(server)

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()











