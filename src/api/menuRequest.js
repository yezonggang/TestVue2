import request from './request'

export function getMenu(param) {
  return request({
    url: '/api/menu/getMenu',
    method: 'post',
    data: param
  })
}
