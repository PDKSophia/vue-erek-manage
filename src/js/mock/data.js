/**
 * other data
 *
 * @summary other data Mock
 * @author PDK
 *
 * Created at     : 2018-12-05
 * Last modified  : 2019-01-11
 */

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
        avatar: 'http://college.bczcdn.com/wapp-res/teacher/attachments/Jacob学长咸蛋英语.png',
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
        avatar: 'http://college.bczcdn.com/wapp-res/teacher/attachments/Jasmine学姐咸蛋英语.png',
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
        avatar: 'http://college.bczcdn.com/wapp-res/teacher/attachments/画板282x.png',
        type: '部长',
        status: 'online',
        phone: '178****8312',
        time: 1539630042000
      },
      {
        id: 4,
        username: '喜洋洋',
        staffID: 1231,
        avatar: 'http://college.bczcdn.com/wapp-res/teacher/attachments/桃子学姐咸蛋英语.png',
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
        avatar: 'http://college.bczcdn.com/wapp-res/teacher/attachments/桃子学姐咸蛋英语.png',
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
        avatar: 'http://college.bczcdn.com/wapp-res/teacher/attachments/画板282x.png',
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
        avatar: 'http://college.bczcdn.com/wapp-res/teacher/attachments/画板282x.png',
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
        avatar: 'http://college.bczcdn.com/wapp-res/teacher/attachments/画板282x.png',
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
        avatar: 'http://college.bczcdn.com/wapp-res/teacher/attachments/画板282x.png',
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
        avatar: 'http://college.bczcdn.com/wapp-res/teacher/attachments/画板282x.png',
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

// 获取 个人页面 - 个人中心 - 所有数据
Mock.mock('/api/erek-user-all/getAllData', () => {
  let response = {
    code: 1,
    msg: '获取成功',
    list: {
      data: [
        {
          name: '成就值',
          data: [
            { value: 6152, text: '查看量' },
            { value: 4522, text: '下载量' },
            { value: 192761, text: '点击量' }
          ]
        },
        {
          name: '钱包',
          data: [
            { value: 921, text: 'Q币' },
            { value: 773, text: '优惠券' },
            { value: 514, text: '余额' }
          ]
        },
        {
          name: '沸点',
          data: [
            { value: 4481, text: '阅读量' },
            { value: 2741, text: '点赞' },
            { value: 1502, text: '评论' }
          ]
        },
        {
          name: '技能掌握',
          data: [
            { value: 66, text: '前端' },
            { value: 32, text: '后端' },
            { value: 45, text: '其他' }
          ]
        }
      ],
      loginStep: {
        timeRange: ['10-31', '11-01', '11-02', '11-03', '11-04', '11-05', '11-06'],
        countRange: [0, 100],
        data: [
          {
            text: '近七日访问量',
            data: [45, 32, 65, 72, 33, 32, 63]
          }
        ]
      },
      skill: {
        mySkill: {
          name: '技能掌握',
          data: [
            { value: 6841, name: 'JavaScript' },
            { value: 8621, name: 'HTML' },
            { value: 5643, name: 'CSS' },
            { value: 7642, name: 'Vue' },
            { value: 7921, name: 'React' }
          ]
        }
      },
      MovieList: [
        {
          name: '肖申克的救赎',
          url: 'https://movie.douban.com/subject/1292052/',
          rate: 9.6
        },
        {
          name: '这个杀手不太冷',
          url: 'https://movie.douban.com/subject/1295644/',
          rate: 9.4
        },
        {
          name: '霸王别姬',
          url: 'https://movie.douban.com/subject/1291546/',
          rate: 9.5
        },
        {
          name: '美丽人生',
          url: 'https://movie.douban.com/subject/1292063/',
          rate: 9.5
        },
        {
          name: '千与千寻',
          url: 'https://movie.douban.com/subject/1291561/',
          rate: 9.2
        },
        {
          name: '辛德勒的名单',
          url: 'https://movie.douban.com/subject/1295124/',
          rate: 9.4
        },
        {
          name: 'T海上钢琴师',
          url: 'https://movie.douban.com/subject/1292001/',
          rate: 9.2
        },
        {
          name: '机器人总动员',
          url: 'https://movie.douban.com/subject/2131459/',
          rate: 9.3
        }
      ],
      BookList: [
        {
          name: 'JavaScript高级编程',
          url: '/#/erek-manage/erek-user/information',
          rate: 9.6
        },
        {
          name: '算法图解',
          url: '/#/erek-manage/erek-user/information',
          rate: 9.4
        },
        {
          name: '霸王别姬',
          url: '/#/erek-manage/erek-user/information',
          rate: 9.5
        },
        {
          name: '数据结构与算法 JavaScript描述',
          url: '/#/erek-manage/erek-user/information',
          rate: 9.5
        },
        {
          name: '图解HTTP',
          url: '/#/erek-manage/erek-user/information',
          rate: 9.2
        },
        {
          name: '深入React技术',
          url: '/#/erek-manage/erek-user/information',
          rate: 9.4
        },
        {
          name: '你不知道的JavaScript',
          url: '/#/erek-manage/erek-user/information',
          rate: 9.2
        },
        {
          name: 'CSS世界',
          url: '/#/erek-manage/erek-user/information',
          rate: 9.3
        }
      ]
    }
  }
  return {
    response
  }
})
