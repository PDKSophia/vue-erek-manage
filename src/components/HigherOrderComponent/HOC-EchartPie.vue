<template>
  <div class="hoc-element">
    <echarts-pie
      :series="pieSeries"
      :width="pieWidth"
      :height="pieHeight"
    ></echarts-pie>
  </div>
</template>

<script>
import EchartsPie from '../EchartsComponents/Pie';
export default {
  name: 'HOCEchartsPie',
  components: {
    EchartsPie
  },
  props: {
    pieData: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      pieSeries: [], // 饼图数据
      pieWidth: '100%',
      pieHeight: '300px'
    };
  },
  watch: {
    pieData: {
      handler(newVal) {
        if (newVal) {
          this.resetFields();
          let obj = {
            name: '访问来源',
            type: 'pie',
            radius: '60%',
            center: ['50%', '60%'],
            data: []
          };
          for (let k = 0; k < newVal.length; k++) {
            obj.data.push(newVal[k]);
          }
          this.pieSeries.push(obj);
        } else {
          this.pieSeries = [];
          this.pieWidth = '100%';
          this.pieHeight = '100%';
        }
      }
    }
  },
  methods: {
    resetFields() {
      this.pieSeries = [];
      this.pieWidth = '100%';
      this.pieHeight = '300px';
    }
  }
};
</script>

<style scoped lang="scss">
.hoc-element {
  width: 100%;
}
</style>
