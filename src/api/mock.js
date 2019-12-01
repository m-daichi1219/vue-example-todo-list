import MockAdapter from 'axios-mock-adapter'

export default {
  run: client => {
    console.log('mock:run')
    const mock = new MockAdapter(client)

    // mock.onGet('/test/call').reply(200, data)
    mock.onGet('/test/call').reply((req) => {
      console.log('onGet')
      console.log(req.headers.testData)
      const number = req.headers.testData.num

      if (number === 1) {
        return [404, { message: '404 err!' }]
      }
      return [200, { id: '1', data: 'qawsedrftgyth' }]
    })

    //     mock.onPost('/').reply(
    //       config => {
    //         let res = JSON.parse(config.data)

    //         res.id = Number(data.length) + 1
    //         data.push(res)
    //         return [200, res]
    //       }
    //     )
    //   },
    //   getData: () => {
    //     return JSON.parse(JSON.stringify(data))
    //   },
    //   setData: input => {
    //     data = JSON.parse(JSON.stringify(input))
    //   },
    //   initialize: () => {
    //     data = initialData()
    //   }
  }
}
