const Mock = require('mockjs')

// 获取所有数据信息
Mock.mock('/api/data/getAllData', () => {
  let response = {
    code: 1,
    msg: '获取成功',
    list: [
      {
        id: 1,
        username: '彭道宽',
        staffID: 1982,
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
        department: '研发部',
        type: '负责人',
        status: 'online',
        phone: '189****8869',
        time: 1539670042000
      },
      {
        id: 2,
        username: '懒羊羊',
        staffID: 2938,
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
        department: '技术部',
        type: '员工',
        status: 'exit',
        phone: '182****8321',
        time: 1539630042000
      },
      {
        id: 3,
        username: '沸羊羊',
        staffID: 1920,
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
        department: '销售部',
        type: '部长',
        status: 'online',
        phone: '178****8312',
        time: 1539630042000
      },
      {
        id: 4,
        username: '喜洋洋',
        staffID: 1231,
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
        department: '研发部',
        type: '员工',
        status: 'online',
        phone: '182****8321',
        time: 1539630042000
      },
      {
        id: 5,
        username: '美羊羊',
        staffID: 2716,
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
        department: '运营部',
        type: '员工',
        status: 'exit',
        phone: '138****8321',
        time: 1539630042000
      },
      {
        id: 6,
        username: '灰太狼',
        staffID: 4271,
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
        department: '运营部',
        type: '部长',
        status: 'exit',
        phone: '138****8321',
        time: 1539630042000
      },
      {
        id: 7,
        username: '红太狼',
        staffID: 5212,
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
        department: '销售部',
        type: '经理',
        status: 'online',
        phone: '138****8321',
        time: 1539630042000
      },
      {
        id: 8,
        username: '哆啦A梦',
        staffID: 7612,
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
        department: '编辑部',
        type: '员工',
        status: 'exit',
        phone: '138****8321',
        time: 1539630042000
      },
      {
        id: 9,
        username: '大熊',
        staffID: 2716,
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
        department: '运营部',
        type: 'online',
        status: 'exit',
        phone: '138****8321',
        time: 1539630042000
      }, 
      { 
        id: 10,
        username: '胖虎',
        staffID: 8612,
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
        department: '研发部',
        type: 'online',
        status: 'online',
        phone: '138****8321',
        time: 1539630042000
      }
    ]
  }
  return {
    response
  }
})

// 获取搜索待办任务
Mock.mock('/api/data/getAllTask', () => {
  let response = {
    code: 1,
    msg: '获取所有待办任务',
    list: [
      {
        text: '未完成任务',
        value: 12
      },
      {
        text: '全部任务',
        value: 41
      },
      {
        text: '部门任务',
        value: 25
      }
    ]
  }
  return {
    response
  }
})

// 获取 `平台日访问量` 和 `日注册人数`
Mock.mock('/api/data/getPlatFormViewData', () => {
  let response = {
    code: 1,
    msg: '获取成功',
    list: {
      timeRange: ['10-31', '11-01', '11-02', '11-03', '11-04', '11-05', '11-06'],
      countRange: [0, 100],
      data: [
        {
          text: '平台日访问量',
          data: [45, 32, 65, 72, 33, 32, 63, 72, 34, 56]
        },
        {
          text: '日注册人数',
          data: [25, 52, 32, 44, 51, 75, 46, 92, 21, 32]
        }
      ]
    }
  }
  return {
    response
  }
})

// 获取首页所有的tab卡片数据
Mock.mock('/api/data/getAllTabCardList', () => {
  let response = {
    code: 1,
    msg: '获取所有首页tab的卡片数据',
    list: [
      {
        text: '使用量',
        value: 131
      },
      {
        text: '下载量',
        value: 382
      },
      {
        text: '围观量',
        value: 89
      },
      {
        text: '推广量',
        value: 225
      }
    ]
  }
  return {
    response
  }
})

// 获取 `站点访问来源数据`
Mock.mock('/api/data/getOriginAllData', () => {
  let response = {
    code: 1,
    msg: '获取站点访问来源数据成功',
    list: [
      {value:335, name:'直接访问'},
      {value:310, name:'邮件营销'},
      {value:234, name:'联盟广告'},
      {value:135, name:'视频广告'},
      {value:1548, name:'搜索引擎'}
    ]
  }
  return {
    response
  }
})