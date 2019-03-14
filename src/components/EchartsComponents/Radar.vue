<template>
  <div class="vue-erek-radar-container">
    <div ref="erek_radar" :style="{ width: width, height: height, marginTop: '50px' }"></div>
  </div>
</template>

<script>
import configOptions from 'js/echarts/radar.config';
export default {
  name: 'VueErekRadar',
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
        return [];
      }
    },
    indicator: {
      type: Array,
      default: function () {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    drawRadarEcharts() {
      let radarEcharts = this.$echarts.init(this.$refs.erek_radar);
      let legendData = [];
      for (let i = 0; i < this.series[0].data.length; i++) {
        legendData.push(this.series[0].data[i].name);
      }
      let newIndicator = [];
      for (let j = 0; j < this.indicator.length; j++) {
        newIndicator.push({
          name: this.indicator[j],
          max: 10000
        });
      }
      let newOptions = Object.assign(configOptions, {
        series: this.series,
        legend: {
          data: legendData
        },
        radar: {
          indicator: newIndicator,
          radius: 80
        }
      });
      radarEcharts.setOption(newOptions);
    }
  },
  mounted() {
    setTimeout(() => {
      this.drawRadarEcharts();
    }, 1000);
  }
};
</script>

<style scoped lang="scss">
.vue-erek-radar-container {
  width: 100%;
  padding: 0 24px;
}
</style>
