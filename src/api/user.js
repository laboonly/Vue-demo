import request from '@/utils/request'

export function getInfo () {
  return request({
    url: '/getUserInfo',
    method: 'get'
  })
}

export function getList () {
  return request({
    url: '/getList',
    method: 'get'
  })
}
