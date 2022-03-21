const { register, login } = require('./controller')
const db = require('../../../../configs/connectionDB')

describe('Test Auth Controller', function () {
  test('Function Register', async () => {
    const request = {
      payload: {
        username: 'Test',
        password: 'Test'
      }
    }
    const h = {fieldResponse: {},
      response: function(res) {
        this.fieldResponse = res
        function code(statusCode) {
          return statusCode
        }
        return {
          code
        }
      },
    }
    await register(request, h)
    expect([200, 400]).toContain(h.fieldResponse.statusCode)
  })
  test('Function Login', async () => {
    const request = {
      payload: {
        username: 'Test',
        password: 'Test'
      }
    }
    const h = {fieldResponse: {},
      response: function(res) {
        this.fieldResponse = res
        function code(statusCode) {
          return statusCode
        }
        return {
          code
        }
      },
    }
    await login(request, h)
    expect([200, 400]).toContain(h.fieldResponse.statusCode)
  })
  afterAll(async () => {
    await db.destroy()
  })
})