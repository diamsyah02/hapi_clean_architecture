"use strict"

const service = require('./service')

const register = async (request, h) => {
  const data = await service.register(request)
  return h.response(data).code(data.statusCode)
}

const login = async (request, h) => {
  const data = await service.login(request)
  return h.response(data).code(data.statusCode)
}

module.exports = {
  register,
  login
}