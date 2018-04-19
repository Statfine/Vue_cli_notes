import request from '@/utils/request'
export function logout () {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getInfo (token) {
  return request({
    url: '/channel/reading/more/0',
    method: 'get',
    params: {
      platform: 'ios',
      uuid: '2A3DF059-902A-4CB7-87F1-F35F351BBB23',
      user_id: '',
      version: 'v4.2.2'
    }
  })
}
