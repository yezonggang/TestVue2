import Mock from 'mockjs'
export default {
  getMenu: config => {
    console.log(config)
    const { username, password } = JSON.parse(config.body)
    console.log(JSON.parse(config.body))
    return {
      code: 20000,
      data: {
        code: 20000,
        menu: [
          {
            path: '/home/main',
            name: 'main',
            label: '首页',
            icon: 's-home',
            url: 'home/index'
          },
          {
            path: '/home/mall',
            name: 'mall',
            label: '商品管理',
            icon: 'video-play',
            url: 'mall/index'
          },
          {
            path: '/home/user',
            name: 'user',
            label: '用户管理',
            icon: 'user',
            url: 'User/index'
          },
          {
            label: '其他',
            icon: 'location',
            children: [
              {
                path: '/page1',
                name: 'page1',
                label: '页面1',
                icon: 'setting',
                url: 'Other/PageOne.vue'
              },
              {
                path: '/page2',
                name: 'page2',
                label: '页面2',
                icon: 'setting',
                url: 'Other/PageTwo.vue'
              }
            ]
          }
        ],
        token: Mock.Random.guid(),
        message: '获取成功'
      }
    }
  }
}
