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
