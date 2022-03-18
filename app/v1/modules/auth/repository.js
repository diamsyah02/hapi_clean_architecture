"use strict"

const bcrypt = require('bcrypt')
const db = require('../../../../configs/connectionDB')
const table = 'users'

const register = async (request) => {
  const { username, password } = request.payload
  const salt = await bcrypt.genSalt(10)
  const password_hashing = await bcrypt.hash(password, salt)
  try {
    const save = await db(table).insert({username: username, password: password_hashing})
    return save
  } catch(e) {
    return e.sqlMessage
  }
}

const checkUsername = async (username) => {
  try {
    const data = await db(table).where('username', username)
    return data
  } catch(e) {
    return e.sqlMessage
  }
}

module.exports = {
  register,
  checkUsername
}