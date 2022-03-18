"use strict"

const response = require('../../../../helpers/WebResponse')
const repo = require('./repository')

const fetchAll = async () => {
  const data = await repo.fetchAll()
  if(data == undefined) {
    return response(500, `Opss.. something's wrong with your database`, [])
  } else {
    if(typeof data === 'object') {
      return response(200, 'Get data pegawai successfully', data)
    } else  {
      return response(500, data, [])
    }
  }
}
const fetchDetail = async (request) => {
  const data = await repo.fetchDetail(request)
  if(data == undefined) {
    return response(500, `Opss.. something's wrong with your database`, [])
  } else {
    if(typeof data === 'object') {
      return response(200, `Get data pegawai with id = ${request.params.id} successfully`, data[0])
    } else  {
      return response(500, data, [])
    }
  }
}

const store = async (request) => {
  const data = await repo.store(request)
  if(data == undefined) {
    return response(500, `Opss.. something's wrong with your database`, [])
  } else {
    if(typeof data === 'object') {
      return response(200, 'Insert data pegawai successfully', data)
    } else  {
      return response(500, data, [])
    }
  }
}

const update = async (request) => {
  const data = await repo.update(request)
  if(data == undefined) {
    return response(500, `Opss.. something's wrong with your database`, [])
  } else {
    if(typeof data === 'object') {
      return response(200, `Update data pegawai with id = ${request.params.id}`, data)
    } else  {
      return response(500, data, [])
    }
  }
}

const remove = async (request) => {
  const data = await repo.remove(request)
  if(data == undefined) {
    return response(500, `Opss.. something's wrong with your database`, [])
  } else {
    if(typeof data === 'object') {
      return response(200, `Delete data pegawai with id = ${request.params.id}`, data)
    } else  {
      return response(500, data, [])
    }
  }
}

module.exports = {
  fetchAll,
  fetchDetail,
  store,
  update,
  remove
}