"use strict"

const RouteV1 = require('../app/v1/routes')
const res = require('../helpers/WebResponse')
require('dotenv').config()

const routes = async (server) => {
  await server.route({
    method: 'GET',
    path: '/',
    config: {
      auth: 'jwt'
    },
    handler: (request, h) => {
      return h.response(res(200, 'Clean Architecture For HapiJS', [])).code(200)
    }
  })
  await RouteV1(server)
}

module.exports = routes