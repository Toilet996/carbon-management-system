import request from '@/utils/request'

// 查询用户列表
export function listUser(query) {
  return request({
    url: '/sys/user/info',
    method: 'get',
    params: query
  })
}