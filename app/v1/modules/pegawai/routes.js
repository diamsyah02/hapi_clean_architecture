"use strict"

const controller = require('./controller')

const PegawaiRoute = async (server) => {
  await server.route({
    method: 'GET',
    path: `${process.env.V1}/pegawai`,
    handler: controller.fetchAll
  })
  await server.route({
    method: 'GET',
    path: `${process.env.V1}/pegawai/{id}`,
    handler: controller.fetchDetail
  })
  await server.route({
    method: 'POST',
    path: `${process.env.V1}/pegawai`,
    handler: controller.store
  })
  await server.route({
    method: 'POST',
    path: `${process.env.V1}/pegawai/{id}`,
    handler: controller.update
  })
  await server.route({
    method: 'GET',
    path: `${process.env.V1}/pegawai/{id}/delete`,
    handler: controller.remove
  })
}

module.exports = PegawaiRoute