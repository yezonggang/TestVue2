import request from './request'

export function getData() {
  return request({
    url: '/api/home/getData',
    method: 'get'
  })
}
