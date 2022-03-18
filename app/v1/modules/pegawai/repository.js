"use strict"

const db = require('../../../../configs/connectionDB')
const table = 'pegawai'

const fetchAll = async () => {
  const data = await db.select().table(table)
  return data
}
const fetchDetail = async (request) => {
  const { id } = request.params
  const data = await db(table).where('id', id)
  return data
}

const store = async (request) => {
  const { nama, alamat, telepon } = request.payload
  const store = await db(table).insert({nama: nama, alamat: alamat, telepon: telepon})
  return store
}

const update = async (request) => {
  const { nama, alamat, telepon } = request.payload
  const { id } = request.params
  const update = await db(table).where('id', id).update({nama: nama, alamat: alamat, telepon: telepon})
  return update
}

const remove = async (request) => {
  const { id } = request.params
  const remove = await db(table).where('id', id).del()
  return remove
}

module.exports = {
  fetchAll,
  fetchDetail,
  store,
  update,
  remove
}