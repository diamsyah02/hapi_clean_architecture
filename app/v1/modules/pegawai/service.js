"use strict"
const response = require('../../../../helpers/WebResponse')
const repo = require('./repository')

const fetchAll = async () => {
  const data = await repo.fetchAll()
  return response(200, 'Get data pegawai successfully', data)
}
const fetchDetail = async (request) => {
  const data = await repo.fetchDetail(request)
  return response(200, `Get data pegawai with id = ${request.params.id} successfully`, data[0])
}

const store = async (request) => {
  const data = await repo.store(request)
  return response(200, 'Insert data pegawai successfully', data)
}

const update = async (request) => {
  const data = await repo.update(request)
  return response(200, `Update data pegawai with id = ${request.params.id}`, data)
}

const remove = async (request) => {
  const data = await repo.remove(request)
  return response(200, `Delete data pegawai with id = ${request.params.id}`, data)
}

module.exports = {
  fetchAll,
  fetchDetail,
  store,
  update,
  remove
}