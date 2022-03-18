"use strict"

const repoAuth = require('../app/v1/modules/auth/repository')

/**
 * Di sini kita tidak mengatur expired token
 * Agar enak ketika pengetesan
 * Tidak harus refresh/login ulang
 * Ketika token expired
 */
const JwtStrategy = (server) => {
  server.auth.strategy('jwt', 'jwt', {
    keys: process.env.KEY,
    verify: {
      aud: 'urn:audience:test',
      iss: 'urn:issuer:test',
      sub: false,
    },
    validate: async (artifacts) => {
      const result = await repoAuth.checkUsername(artifacts.decoded.payload.username)
      if(result.length > 0) {
        return {
          isValid: true,
          credentials: {
            username: artifacts.decoded.payload.username,
          }
        }
      }
      return {
        isValid: false,
        credentials: {}
      }
    }
  })
}

module.exports  = JwtStrategy