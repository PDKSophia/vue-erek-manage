/**
 * 卡片mock数据设计
 *
 * @summary Card Mock
 * @author PDK
 *
 * Created at     : 2019-1-11
 * Last modified  : 2019-01-11
 */

const Mock = require('mockjs')

Mock.mock('/api/card/total', () => {
  return {
    code: 1,
    msg: '获取所有首页tab的卡片数据',
    data: [
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
})
