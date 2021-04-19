import axios from 'axios'
import { API_KEY } from './env'

axios.defaults.baseURL = '/api'

function request(type, url, lang = 'en-US', data = null) {
  const promise = new Promise((resolve, reject) => {
    const perms = {
      url: `${url}`,
      method: `${type}`,
      headers: {
        'X-API-KEY': API_KEY,
        'Accept-Language': lang,
        'X-Requested-With': 'XMLHttpRequest',
        'X-ORIGIN': 'DwCzATbtYQvX2440hcAymGZBfMZi3F0l'
      }
    }
    if (type !== 'GET' && data) {
      perms.data = data
    } else if (type === 'GET' && data) {
      perms.params = data
    }

    axios(perms)
      .then(successHandler(resolve, reject))
      .catch(errorHandler(resolve, reject))
  })
  return promise
}

function successHandler(resolve) {
  return (response) => {
    resolve(response)
  }
}

function errorHandler(resolve, reject) {
  return (error) => {
    reject(error.response.data)
  }
}

/*
How to use request
  request('(request type)', '(api path)', { params })
    .then(res => {
      // process
    })
    .catch(() => {
      // error handling
    })
*/

export default request
