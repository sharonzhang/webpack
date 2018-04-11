import axios from 'axios'


let instance = axios.create({
  baseURL: process.env.BASE_URL
})

instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance
