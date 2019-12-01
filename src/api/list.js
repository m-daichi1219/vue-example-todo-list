import client from './client'
import mock from './mock'

export default {
  callGet: data => {
    if (process.env.VUE_APP_ENV === 'localhost') {
      console.log('list:mock run')
      mock.run(client)
    }

    console.log('list:callGet')
    return new Promise((resolve, reject) => {
      client.get('/test/call', { headers: { 'testData': data } })
        // .then(res => resolve({ id: res.data.id, data: res.data.data }))
        .then(res => {
          console.log('callget then')
          console.log(res.data)
          resolve({ id: res.data.id, data: res.data.data })
        })
        .catch(err => {
          console.log(err)
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
