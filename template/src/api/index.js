import axios from 'axios'


let instance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 600000,
  headers: {'Content-Type': 'application/json'}
})

instance.interceptors.request.use(
  config => {
    // const COOKIE_SUFFIX = process.env.COOKIE_SUFFIX
    // const JWT_TOKEN = `JWT_TOKEN${COOKIE_SUFFIX}`
    // if (Vue.cookie.get(JWT_TOKEN)) {
    //   config.headers.Authorization = 'Bearer ' + Vue.cookie.get(JWT_TOKEN)
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    // let RedirectToLoginCodeList = [410, 411, 412]
    // let RedirectToForbiddenCodeList = [403]
    // let RedirectToNotFoundCodeList = [101]
    // if (response.data.code !== 0) {
    //   if (RedirectToForbiddenCodeList.indexOf(response.data.code) !== -1) {
    //     window.location.href = '#/not_allowed'
    //   } else if (RedirectToNotFoundCodeList.indexOf(response.data.code) !== -1) {
    //     window.location.href = '#/not_found'
    //   } else if (RedirectToLoginCodeList.indexOf(response.data.code) !== -1) {
    //     window.location.href = '#/logout'
    //   }
    //   return Promise.reject(response.data)
    // } else {
    //   return response
    // }
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance
