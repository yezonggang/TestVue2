import Mock from 'mockjs'
import menuApi from './mockData/menuApi'
import dataApi from './mockData/dataApi'
import userApi from './mockData/userApi'

Mock.mock('/api/menu/getMenu', menuApi.getMenu)
Mock.mock('/api/home/getData', dataApi.getData)
// mock拦截按照完整路径匹配，这里正则表达式拦截带参数的get请求
Mock.mock(RegExp('/api/user/getUser?' + '.*'), 'get', userApi.getUser)
Mock.mock(RegExp('/api/user/del?' + '.*'), 'post', userApi.deleteUser)
Mock.mock(RegExp('/api/user/add?' + '.*'), 'post', userApi.createUser)
Mock.mock(RegExp('/api/user/update?' + '.*'), 'post', userApi.updateUser)
