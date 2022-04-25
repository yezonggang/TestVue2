import request from './request'

export function getUser(params) {
  return request({
    url: '/api/user/getUser',
    method: 'get',
    params
  })
}

export function userAdd(params) {
  return request({
    url: '/api/user/add',
    method: 'post',
    data: params
  })
}

export function userDel(params) {
  return request({
    url: '/api/user/del',
    method: 'post',
    params
  })
}

export function userEdit(params) {
  return request({
    url: '/api/user/update',
    method: 'post',
    data: params
  })
}
