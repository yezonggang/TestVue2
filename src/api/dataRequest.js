import request from './request'

export function getData() {
  return request({
    url: '/api/home/getData',
    method: 'get'
  })
}

export function getUser(params) {
  return request({
    url: '/user/getUser',
    method: 'get',
    params
  })
}
