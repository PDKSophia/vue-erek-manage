<template>
  <div class='vue-erek-pie-container'>
    <div ref='erek_pie' :style="{ width: width, height: height, marginTop: '50px' }"></div>
  </div>
</template>

<script>
import configOptions from '../../config/echarts/pie.config'
export default {
  name: 'VueErekPie',
  props: {
    width: {
      type: String,
      default: '50%'
    },
    height: {
      type: String,
      default: '400px'
    },
    series: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    drawPieEcharts() {
      let pieEcharts = this.$echarts.init(this.$refs.erek_pie)
      let newOptions = Object.assign(configOptions, {
        series: this.series
      })
      pieEcharts.setOption(newOptions)
    }
  },
  mounted() {
    setTimeout(() => {
      this.drawPieEcharts()
    }, 1000)
  },
}
</script>

<style scoped lang='scss'>
.vue-erek-pie-container {
  width: 100%;
  padding: 0 24px;
}
</style>
