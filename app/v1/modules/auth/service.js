"use strict"

const response = require('../../../../helpers/WebResponse')
const repo = require('./repository')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async (request) => {
  const { username } = request.payload
  const check = await repo.checkUsername(username)
  if(check == undefined) {
    return response(500, `Opss.. something's wrong with your database`, [])
  } else {
    if(typeof check === 'object') {
      if(check.length == 0) {
        const data = await repo.register(request)
        return response(200, 'Register successfully', {userID: data[0]})
      } else {
        return response(400, 'Register unsuccessfully, because your username is already exist', null)
      }
    } else {
      return response(500, check, [])
    }
  }
}

const login = async (request) => {
  const { username, password } = request.payload
  const data = await repo.checkUsername(username)
  if(data == undefined) {
    return response(500, `Opss.. something's wrong with your database`, [])
  } else {
    if(typeof data === 'object') {
      if(data.length > 0) {
        const cek = bcrypt.compare(password, data[0].password)
        if(cek) {
          const token = jwt.sign({
            username: username,
            aud: 'urn:audience:test',
            iss: 'urn:issuer:test',
            sub: false,
          }, process.env.KEY)
          const res = {
            data: data[0],
            token: token
          }
          return response(200, 'Login successfully', res)
        } else {
          return response(400, 'Login unsuccessfully, because your password is wrong', data)
        }
      } else {
        return response(400, 'Login unsuccessfully, because your email is not registered', data)
      }
    } else {
      return response(500, data, [])
    }
  }
}

module.exports = {
  register,
  login
}