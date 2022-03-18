"use strict"

const AuthRoute = require('./modules/auth/routes')
const PegawaiRoute = require('./modules/pegawai/routes')

const RouteV1 = async (server) => {
  await AuthRoute(server)
  await PegawaiRoute(server)
}

module.exports = RouteV1