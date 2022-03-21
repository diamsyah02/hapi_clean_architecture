"use strict"

const db = require('@configs/connectionDB')
const table = 'pegawai'

const fetchAll = async () => {
  try {
    const data = await db.select().table(table)
    return data
  } catch(e) {
    return e.sqlMessage
  }
}
const fetchDetail = async (request) => {
  const { id } = request.params
  try {
    const data = await db(table).where('id', id)
    return data
  } catch(e) {
    return e.sqlMessage
  }
}

const store = async (request) => {
  const { nama, alamat, telepon } = request.payload
  try {
    const store = await db(table).insert({nama: nama, alamat: alamat, telepon: telepon})
    return store
  } catch(e) {
    return e.sqlMessage
  }
}

const update = async (request) => {
  const { nama, alamat, telepon } = request.payload
  const { id } = request.params
  try {
    const update = await db(table).where('id', id).update({nama: nama, alamat: alamat, telepon: telepon})
    return update
  } catch(e) {
    return e.sqlMessage
  }
}

const remove = async (request) => {
  const { id } = request.params
  try {
    const remove = await db(table).where('id', id).del()
    return remove
  } catch(e) {
    return e.sqlMessage
  }
}

module.exports = {
  fetchAll,
  fetchDetail,
  store,
  update,
  remove
}