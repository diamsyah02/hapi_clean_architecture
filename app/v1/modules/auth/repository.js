"use strict"

const bcrypt = require('bcrypt')
const db = require('../../../../configs/connectionDB')
const table = 'users'

const register = async (request) => {
  const { username, password } = request.payload
  const salt = await bcrypt.genSalt(10)
  const password_hashing = await bcrypt.hash(password, salt)
  const save = await db(table).insert({username: username, password: password_hashing})
  return save
}

const checkUsername = async (username) => {
  const data = await db(table).where('username', username)
  return data
}

module.exports = {
  register,
  checkUsername
}