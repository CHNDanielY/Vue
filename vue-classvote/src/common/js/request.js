import axios from 'axios'
import storage from 'good-storage'

/* eslint-disable */
const service = axios.create({
  timeout: 5000,// request timeout
  baseURL: 'https://www.easy-mock.com/mock/5acb5a82942d29514de2a2f9',
  withCredentials: false
})
// request interceptor
service.interceptors.request.use(config => {
  // Do something before request is sent
  const token = storage.get('sessionKey', '')
  if (token) {
    config.headers['sessionKey'] = token // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
	}
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

export default service
