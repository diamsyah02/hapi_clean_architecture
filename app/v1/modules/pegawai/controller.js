"use strict"

const service = require('./service')

const fetchAll = async (request, h) => {
  const data = await service.fetchAll()
  return h.response(data).code(data.statusCode)
}
const fetchDetail = async (request, h) => {
  const data = await service.fetchDetail(request)
  return h.response(data).code(data.statusCode)
}

const store = async (request, h) => {
  const data = await service.store(request)
  return h.response(data).code(data.statusCode)
}

const update = async (request, h) => {
  const data = await service.update(request)
  return h.response(data).code(data.statusCode)
}

const remove = async (request, h) => {
  const data = await service.remove(request)
  return h.response(data).code(data.statusCode)
}

module.exports = {
  fetchAll,
  fetchDetail,
  store,
  update,
  remove
}