const { fetchAll, fetchDetail, store, update, remove } = require('./controller')
const db = require('../../../../configs/connectionDB')

describe('Test Auth Pegawai', function () {
  test('Function FetchAll', async () => {
    const request = {}
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
    await fetchAll(request, h)
    expect([200, 400, 401]).toContain(h.fieldResponse.statusCode)
  })
  test('Function FetchDetail', async () => {
    const request = {
      params: {
        id: 1
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
    await fetchDetail(request, h)
    expect([200, 400, 401]).toContain(h.fieldResponse.statusCode)
  })
  test('Function Store', async () => {
    const request = {
      payload: {
        nama: 'Test',
        alamat: 'Test',
        telepon: '08999999999'
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
    await store(request, h)
    expect([200, 400, 401]).toContain(h.fieldResponse.statusCode)
  })
  test('Function Update', async () => {
    const request = {
      payload: {
        nama: 'Test',
        alamat: 'Test',
        telepon: '08999999999'
      },
      params: {
        id: 1
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
    await update(request, h)
    expect([200, 400, 401]).toContain(h.fieldResponse.statusCode)
  })
  test('Function Remove', async () => {
    const request = {
      params: {
        id: 1
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
    await remove(request, h)
    expect([200, 400, 401]).toContain(h.fieldResponse.statusCode)
  })
  afterAll(async () => {
    await db.destroy()
  })
})