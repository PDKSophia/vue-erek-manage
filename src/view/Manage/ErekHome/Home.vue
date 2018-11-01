<template>
  <div>
    <div class="vue-erek-home-up">
      <vue-erek-echarts-line
        :xAxis='xAxis'
        :yAxis='yAxis'
        :series='lineSeries'
        :itemList='itemList'
        :width='lineWidth'
        :height='lineHeight'
      ></vue-erek-echarts-line>
      <div class="vue-erek-right-box" :style="{height: 'height'}">
        <p class='vue-erek-right-box-title'>数据卡片
        </p>
        <vue-erek-tab :tabArray='tabArray'/>
      </div>
    </div>
    <erek-br :bgColor='hrObj.bgColor' :height='hrObj.height'></erek-br>
    <div class="vue-erek-home-down">
      <vue-erek-echarts-pie
        :series="pieSeries"
        :width='pieWidth'
        :height='pieHeight'
      ></vue-erek-echarts-pie>
      <vue-erek-echarts-pie
        :series="pieSeries"
        :width='pieWidth'
        :height='pieHeight'
      ></vue-erek-echarts-pie>
    </div>
  </div>
</template>

<script>
import VueErekEchartsLine from '../../../common/ErekEcharts/erek-line.vue'
import VueErekEchartsPie from '../../../common/ErekEcharts/erek-pie.vue'
import VueErekTab from '../../../common/ErekTab/vue-erek-tab.vue'
import ErekBr from '../../../common/ErekBr/vue-erek-br.vue'
import tabconfig from '../../../config/tab'

export default {
  name: 'ErekManageHome',
  components: {
    VueErekEchartsLine,
    VueErekEchartsPie,
    VueErekTab,
    ErekBr
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
        data: []
      }
      for (let k = 0; k < res.length; k++) {
        obj.data.push(res[k])
      }
      this.pieSeries.push(obj)
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
