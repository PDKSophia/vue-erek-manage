<template>
  <div>
    <div class="vue-erek-home-container">
      <vue-erek-echarts-line
        :xAxis='xAxis'
        :yAxis='yAxis'
        :series='series'
        :itemList='itemList'
        :width='width'
        :height='height'
      ></vue-erek-echarts-line>
      <div class="vue-erek-right-box" :style="{height: 'height'}">
        <p class='vue-erek-right-box-title'>数据卡片
        </p>
        <vue-erek-tab :tabArray='tabArray'/>
      </div>
    </div>
  </div>
</template>

<script>
import VueErekEchartsLine from '../../../common/ErekEcharts/erek-line.vue'
import VueErekTab from '../../../common/ErekTab/vue-erek-tab.vue'
import tabconfig from '../../../config/tab'

export default {
  name: 'ErekManageHome',
  components: {
    VueErekEchartsLine,
    VueErekTab
  },
  data () {
    return {
      width: '100%',
      height: '300px',
      xAxis: { // x轴 
        data: []
      }, 
      yAxis: { // y轴
        min: null,
        max: null
      },
      itemList: [],
      series: [], // 折线数据
      tabArray: [],
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
        this.series.push(obj)
      }
    })
    this.$api.fetchAllTabData().then(res => {
      console.log(res)
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
  },
}
</script>

<style scoped lang='scss'>
.vue-erek-home-container {
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
</style>
