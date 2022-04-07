import axios from 'axios';
let axiosInstance = null;
let headers = {
  'Content-Type': 'application/json',
}

function setHeaders(inputHeaders) {
  headers = inputHeaders
}

function getHeaders() {
  return headers
}

function getInstance() {
  if (axiosInstance != null) {
    return axiosInstance
  } else {
    axiosInstance = axios.create({
      baseURL: 'http://128.199.211.17/api/v1/home',
      headers: getHeaders()
    })
  }
  return axiosInstance;
}

function get(endpointApiurl, payload = {}) {
  return getInstance().get(endpointApiurl, payload)
}

function post(endpointApiurl, payload = {}) {
  return getInstance().post(endpointApiurl, payload)
}

function put(endpointApiurl, payload = {}) {
  return getInstance().put(endpointApiurl, payload)
}

function del(endpointApiurl, payload = {}) {
  return getInstance().delete(endpointApiurl, payload)
}
export const Axios = {
  axiosInstance,
  getHeaders,
  setHeaders,
  get,
  post,
  del,
  put,
}
