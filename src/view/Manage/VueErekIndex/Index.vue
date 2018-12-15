<template>
  <div>
    <div class="vue-erek-home-up">
      <echarts-line
        :xAxis='xAxis'
        :yAxis='yAxis'
        :series='lineSeries'
        :itemList='itemList'
        :width='lineWidth'
        :height='lineHeight'
      ></echarts-line>
      <div class="vue-erek-right-box" :style="{height: 'height'}">
        <p class='vue-erek-right-box-title'>数据卡片
        </p>
        <vue-scale-card :tabArray='tabArray'/>
      </div>
    </div>
    <vue-divider :bgColor='hrObj.bgColor' :height='hrObj.height'></vue-divider>
    <div class="vue-erek-home-down">
      <echarts-radar
        :series="radarSeries"
        :indicator='radarIndicator'
        :width='radarWidth'
        :height='radarHeight'
      ></echarts-radar>
      <echarts-pie
        :series="pieSeries"
        :width='pieWidth'
        :height='pieHeight'
      ></echarts-pie>
      <echarts-radar
        :series="radarSeries"
        :indicator='radarIndicator'
        :width='radarWidth'
        :height='radarHeight'
      ></echarts-radar>
    </div>
  </div>
</template>

<script>
import EchartsLine from '../../../components/EchartsComponents/Line.vue'
import EchartsPie from '../../../components/EchartsComponents/Pie.vue'
import EchartsRadar from '../../../components/EchartsComponents/Radar.vue'
import VueScaleCard from '../../../components/ScaleCardComponents/Index.vue'
import VueDivider from '../../../components/DividerComponents/Divider.vue'
import tabconfig from '../../../config/tab'

export default {
  name: 'ErekManageHome',
  components: {
    EchartsLine,
    EchartsPie,
    EchartsRadar,
    VueScaleCard,
    VueDivider
  },
  data () {
    return {
      xAxis: { // x轴 
        data: []
      }, 
      yAxis: { // y轴
        min: null,
        max: null
      },
      itemList: [],
      lineWidth: '100%',
      lineHeight: '300px',
      lineSeries: [], // 折线数据
      tabArray: [], // 数据卡片
      pieSeries: [], // 饼图数据
      pieWidth: '100%',
      pieHeight: '300px',
      hrObj: {
        bgColor: '#f5f7f9',
        height: '30px'
      },
      radarWidth: '100%',
      radarHeight: '300px',
      radarSeries: [], // 雷达图数据
      radarIndicator: [] // 雷达图配置
    }
  },
  mounted() {
    // 发送请求拿到 `平台日访问量`
    this.$api.fetchPlatFormViewData().then(res => {
      for (let i = 0; i < res.timeRange.length; i++) {
        this.xAxis.data.push(res.timeRange[i])
      }
      this.yAxis.min = res.countRange[0]
      this.yAxis.max = res.countRange[1]
      for (let j = 0; j < res.data.length; j++) {
        let normalColor = this.$utils.getColorFromArray()
        let lineStyle = this.$utils.getColorFromArray()
        let config = {
          text: res.data[j].text,
          badgeColor: lineStyle
        }
        this.itemList.push(config)
        let obj = {
          data: res.data[j].data,
          type: 'line',
            itemStyle: {
            normal: {
              color: normalColor,  // 设置折线点颜色
              lineStyle: {
                color: lineStyle  // 设置折线颜色
              }
            }
          },
          smooth: true // 折线 圆滑
        }
        this.lineSeries.push(obj)
      }
    })
    // 请求拿到 `卡片数据`
    this.$api.fetchAllTabData().then(res => {
      for (let q = 0; q < res.length; q++) {
        let bgColor = this.$utils.getColorFromArray()
        let conf = Object.assign({}, tabconfig, {
          width: '50%',
          bgColor: bgColor,
          color: '#f1f1f1',
          valueColor: '#f1f1f1',
          borderColor: bgColor,
          text: res[q].text,
          value: res[q].value
        })
        this.tabArray.push(conf)
      }
    })
    // 请求拿到 `站点访问来源数据`
    this.$api.fetchAllOriginData().then(res => {
      let obj = {
        name: '访问来源',
        type: 'pie',
        radius : '60%',
        center: ['50%', '60%'],
        data: []
      }
      for (let k = 0; k < res.length; k++) {
        obj.data.push(res[k])
      }
      this.pieSeries.push(obj)
    })
    // 请求拿到 `预算开销和实际开销`
    this.$api.fetchExpenseOriginData().then(res => {
      let obj = {
        name: `预算分配与实际开销`,
        type: 'radar',
        data: [],
        itemStyle: {normal: {areaStyle: {type: 'default'}}},
      }
      Object.keys(res).forEach((key) => {
        let dataObj = {
          value: [],
          name: res[key].name
        }
        for (let j = 0; j < res[key].data.length; j++) {
          dataObj.value.push(res[key].data[j].value)
          this.radarIndicator.push(res[key].data[j].name)
        }
        obj.data.push(dataObj)
      })
      this.radarSeries.push(obj)
      this.radarIndicator = this.$utils.uniqueArray(this.radarIndicator)
    })
  },
}
</script>

<style scoped lang='scss'>
.vue-erek-home-up {
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: space-between;

  > .vue-erek-right-box {
    width: 50%;
    padding: 24px;
    height: 100%;

    > .vue-erek-right-box-title {
      font-size: 15px;
      font-weight: 600;
      margin-bottom: 35px;
      margin-top: 10px;
    }
  }
}
.vue-erek-home-down {
  width: 100%;
  display: flex;
  justify-content: space-between;

}
</style>
