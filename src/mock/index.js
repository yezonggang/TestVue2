import Mock from 'mockjs'
import menuApi from './mockData/menuApi'
import dataApi from './mockData/dataApi'

Mock.mock('/api/menu/getMenu', menuApi.getMenu)
Mock.mock('/api/home/getData', dataApi.getData)
