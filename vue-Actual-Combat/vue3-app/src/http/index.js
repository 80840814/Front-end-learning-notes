import axios from 'axios'
const $http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});
// 添加请求拦截器
$http.interceptors.request.use(function (config) {
  config.headers.token = '12321'
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
$http.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  let data = response.data
  return data;
}, function (error) { 
  return Promise.reject(error);
});
export default $http