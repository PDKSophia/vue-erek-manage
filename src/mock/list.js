const Mock = require('mockjs')

// 获取 `列表 - 表格` 数据
Mock.mock('/api/erek-list/table', () => {
  return {
    code: 1,
    msg: '获取成功',
    data: {
      current: 1,
      size: 10,
      total: 20,
      list: [
        {
          id: 1,
          username: '彭道宽',
          staffID: 1982,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
          department: '研发部',
          type: 'Web前端工程师',
          status: '在职',
          phone: '189****8869',
          time: 1539670042000
        },
        {
          id: 2,
          username: '懒羊羊',
          staffID: 2938,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
          department: '技术部',
          type: '员工',
          status: '休假',
          phone: '182****8321',
          time: 1539630042000
        },
        {
          id: 3,
          username: '沸羊羊',
          staffID: 1920,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
          department: '销售部',
          type: '部长',
          status: '在职',
          phone: '178****8312',
          time: 1539630042000
        },
        {
          id: 4,
          username: '喜洋洋',
          staffID: 1231,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
          department: '研发部',
          type: '员工',
          status: '在职',
          phone: '182****8321',
          time: 1539630042000
        },
        {
          id: 5,
          username: '美羊羊',
          staffID: 2716,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
          department: '运营部',
          type: '员工',
          status: '休假',
          phone: '138****8321',
          time: 1539630042000
        },
        {
          id: 6,
          username: '灰太狼',
          staffID: 4271,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
          department: '运营部',
          type: '部长',
          status: '休假',
          phone: '138****8321',
          time: 1539630042000
        },
        {
          id: 7,
          username: '红太狼',
          staffID: 5212,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
          department: '销售部',
          type: '经理',
          status: '在职',
          phone: '138****8321',
          time: 1539630042000
        },
        {
          id: 8,
          username: '哆啦A梦',
          staffID: 7612,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
          department: '编辑部',
          type: '员工',
          status: '休假',
          phone: '138****8321',
          time: 1539630042000
        },
        {
          id: 9,
          username: '大熊',
          staffID: 2716,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
          department: '运营部',
          type: '在职',
          status: '休假',
          phone: '138****8321',
          time: 1539630042000
        },
        {
          id: 10,
          username: '胖虎',
          staffID: 8612,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
          department: '研发部',
          type: '在职',
          status: '在职',
          phone: '138****8321',
          time: 1539630042000
        }
      ]
    }
  }
})

// 获取 `标准列表` 待办任务
Mock.mock('/api/erek-list/standard/all-task', () => {
  return {
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
})

// 获取 `列表 - 标准列表` 数据
Mock.mock('/api/erek-list/standard', () => {
  return {
    code: 1,
    msg: '获取成功',
    data: {
      current: 1,
      size: 10,
      total: 3,
      list: [
        {
          id: 1,
          username: '彭道宽',
          content: '那是一种内在的东西， 他们到达不了，也无法触及的',
          staffID: 1982,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
          phone: '189****8869',
          department: '研发部'
        },
        {
          id: 2,
          username: '朱晓武',
          content:
            '土地是以它的肥沃和收获而被估价的；才能也是土地，不过它生产的不是粮食，而是真理。',
          staffID: 1982,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
          phone: '189****8869',
          department: '研发部'
        },
        {
          id: 3,
          username: '何惟禹',
          content:
            '这世界要是没有爱情，它在我们心中还会有什么意义！这就如一盏没有亮光的走马灯',
          staffID: 1982,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
          phone: '189****8869',
          department: '研发部'
        }
      ]
    }
  }
})
