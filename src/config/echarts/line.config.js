const options = {
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    splitLine: {  // 去掉网格线
      show: false
    },
    splitArea: {  //保留网格区域
      show: false
    },
    boundaryGap: false,
  },
  grid: {
    left: '0%',
    bottom: '0%',
    containLabel: true
  },
  yAxis: {
    type: 'value',
    splitLine: {  // 去掉网格线
      show: true
    },
    splitArea: {  //保留网格区域
      show: false
    },
    min: 0,
    max: 1
  },
  series: [
    {
      namespace: 'default',   // 默认
      data: [0.5, 0.4, 0.5, .8, 0, .4, .2], // 数据
      type: 'line',
      itemStyle: {
        normal: {
          color: '#f3b731',  // 设置折线点颜色
          lineStyle: {
            color: '#f3b731'  // 设置折线颜色
          }
        }
      },
      smooth: true // 折线 圆滑
    },
  ]  
}

export default options