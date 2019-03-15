<template>
  <div class="hoc-element">
    <echarts-radar
      :series="radarSeries"
      :indicator="radarIndicator"
      :width="radarWidth"
      :height="radarHeight"
    ></echarts-radar>
  </div>
</template>

<script>
import EchartsRadar from '../EchartsComponents/Radar';
export default {
  name: 'HOCEchartsRadar',
  components: {
    EchartsRadar
  },
  props: {
    radarData: {
      type: Object,
      default: function () {
        return {};
      }
    }
  },
  data() {
    return {
      radarWidth: '100%',
      radarHeight: '300px',
      radarSeries: [], // 雷达图数据
      radarIndicator: [] // 雷达图配置
    };
  },
  watch: {
    radarData: {
      handler(newVal) {
        this.resetFields();
        if (newVal) {
          let obj = {
            name: `预算分配与实际开销`,
            type: 'radar',
            data: [],
            itemStyle: { normal: { areaStyle: { type: 'default' } } }
          };
          Object.keys(newVal).forEach(key => {
            let dataObj = {
              value: [],
              name: newVal[key].name
            };
            for (let j = 0; j < newVal[key].data.length; j++) {
              dataObj.value.push(newVal[key].data[j].value);
              this.radarIndicator.push(newVal[key].data[j].name);
            }
            obj.data.push(dataObj);
          });
          this.radarSeries.push(obj);
          this.radarIndicator = this.$utils.uniqueArray(this.radarIndicator);
        }
      }
    }
  },
  methods: {
    resetFields() {
      this.radarWidth = '100%';
      this.radarHeight = '300px';
      this.radarSeries = []; // 雷达图数据
      this.radarIndicator = []; // 雷达图配置
    }
  }
};
</script>

<style scoped lang="scss">
.hoc-element {
  width: 100%;
}
</style>
