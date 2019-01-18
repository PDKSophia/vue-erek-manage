<template>
  <div class="hoc-element">
    <!-- <echarts-line
      :xAxis="xAxis"
      :yAxis="yAxis"
      :series="lineSeries"
      :itemList="itemList"
      :width="lineWidth"
      :height="lineHeight"
    ></echarts-line>-->
  </div>
</template>

<script>
// import EchartsRadar from '../EchartsComponents/Radar';
export default {
  name: 'HOCEchartsRadar',
  components: {
    // EchartsRadar
  },
  props: {
    lineData: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      xAxis: {
        // x轴
        data: []
      },
      yAxis: {
        // y轴
        min: -1,
        max: -1
      },
      itemList: [], // 头部badge
      lineWidth: '100%',
      lineHeight: '300px',
      lineSeries: [] // 折线数据
    };
  },
  watch: {
    lineData: {
      handler(newVal) {
        if (newVal) {
          this.resetFields();
          const { countRange = [], list = [], timeRange = [] } = newVal;
          // 设置x轴
          for (let i = 0; i < timeRange.length; i++) {
            this.xAxis.data.push(timeRange[i]);
          }
          // 设置y轴
          this.yAxis.min = countRange[0];
          this.yAxis.max = countRange[1];

          for (let i = 0; i < list.length; i++) {
            let normalColor = this.$utils.getColorFromArray();
            let lineStyle = this.$utils.getColorFromArray();

            let badgeItem = {
              text: list[i].text,
              badgeColor: lineStyle
            };
            this.itemList.push(badgeItem);

            // 折线样式及数据设置
            let obj = {
              data: list[i].data,
              type: 'line',
              itemStyle: {
                normal: {
                  color: normalColor, // 设置折线点颜色
                  lineStyle: {
                    color: normalColor // 设置折线颜色
                  }
                }
              },
              smooth: true // 折线 圆滑
            };
            this.lineSeries.push(obj);
          }
        } else {
          this.lineData = {};
        }
      }
    }
  },
  methods: {
    resetFields() {
      (this.xAxis = {
        // x轴
        data: []
      }),
        (this.yAxis = {
          // y轴
          min: -1,
          max: -1
        }),
        (this.itemList = []), // 头部badge
        (this.lineWidth = '100%'),
        (this.lineHeight = '300px'),
        (this.lineSeries = []); // 折线数据
    }
  }
};
</script>

<style scoped lang="scss">
.hoc-element {
  width: 100%;
}
</style>
