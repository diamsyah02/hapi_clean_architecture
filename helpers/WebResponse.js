"use strict"

const response  = (statusCode, message, results) => {
  return {
    statusCode: statusCode,
    message: message,
    result: results
  }
}

module.exports = response