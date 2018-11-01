const option = {
  tooltip: {},
  legend: {
    data: ['预算分配', '实际开销']
  },
  radar: {
    name: {
      textStyle: {
        color: '#fff',
        backgroundColor: '#999',
        borderRadius: 3,
        padding: [3, 5]
      }
    },
    indicator: [
      { name: '销售', max: 10000},
      { name: '管理', max: 10000},
      { name: '信息技术', max: 10000},
      { name: '客服', max: 10000},
      { name: '研发', max: 10000}
    ],
    radius: 80,
    center: ['50%','60%']
  },
  series: [{
    type: 'radar',
    data: [
      {
        value: [4300, 10000, 28000, 35000, 50000],
        name: '预算分配'
      },
      {
        value : [5000, 14000, 28000, 31000, 42000],
        name : '实际开销'
      }
    ]
  }]
};

export default option