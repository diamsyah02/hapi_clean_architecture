"use strict"

const controller = require('./controller')

const AuthRoute = async (server) => {
  server.route({
    method: 'POST',
    path: `${process.env.V1}/login`,
    config: {
      auth: false
    },
    handler: controller.login
  })

  server.route({
    method: 'POST',
    path: `${process.env.V1}/register`,
    config: {
      auth: false
    },
    handler: controller.register
  })
}

module.exports = AuthRoute