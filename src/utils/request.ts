import store from '@/store'
import axios from 'axios'

const request = axios.create({

})

request.interceptors.request.use((config) => {
  const { user } = store.state
  if (user && user.access_token) {
    config.headers.Authorization = user.access_token
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

request.interceptors.response.use()

export default request
