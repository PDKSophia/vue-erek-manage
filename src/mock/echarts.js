/**
 * 图表mock数据设计
 *
 * @summary Echarts Mock
 * @author PDK
 *
 * Created at     : 2019-01-11
 * Last modified  : 2019-01-11
 */

const Mock = require('mockjs');
/**
 * @获取平台近Day天的访问量
 * @param {Number} day
 * @return {*}
 */
Mock.mock('/api/platform/nearly/seven-day?day=7', () => {
  return {
    code: 1,
    msg: '获取成功',
    data: {
      timeRange: [
        '01-04',
        '01-05',
        '01-06',
        '01-07',
        '01-08',
        '01-09',
        '01-10'
      ],
      countRange: [0, 100],
      text: '平台日访问量',
      list: [
        {
          text: '平台日访问量',
          data: [45, 32, 75, 72, 33, 62, 56]
        },
        {
          text: '日注册人数',
          data: [25, 52, 32, 79, 52, 41, 32]
        }
      ]
    }
  };
});

/**
 * @获取平台来源数据
 * @return {*}
 */
Mock.mock('/api/platform/getOrigin', () => {
  return {
    code: 1,
    msg: '获取站点访问来源数据成功',
    data: [
      { value: 335, name: '直接访问' },
      { value: 310, name: '联盟广告' },
      { value: 234, name: '垃圾邮箱' },
      { value: 135, name: '视频广告' },
      { value: 1548, name: '搜索引擎' }
    ]
  };
});

/**
 * @获取实际开销与预算开销
 * @return {*}
 */
Mock.mock('/api/platform/getExpense', () => {
  return {
    code: 1,
    msg: '获取预算开销和实际开销成功',
    data: {
      alloccate: {
        name: '预算开销',
        data: [
          { value: 4000, name: '研发部' },
          { value: 3000, name: '编辑部' },
          { value: 3000, name: '运营部' },
          { value: 2500, name: '人力资源部' },
          { value: 2500, name: '视频部' }
        ]
      },
      actual: {
        name: '实际开销',
        data: [
          { value: 8821, name: '研发部' },
          { value: 6761, name: '编辑部' },
          { value: 8865, name: '运营部' },
          { value: 5865, name: '人力资源部' },
          { value: 7612, name: '视频部' }
        ]
      }
    }
  };
});
