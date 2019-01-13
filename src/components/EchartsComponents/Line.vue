<template>
  <div class="vue-erek-line-container">
    <div class="vue-layout-header-line">
      <p
        class="vue-erek-line-title"
        v-for="(item, index) in itemList"
        :key="index"
      >
        <span
          class="vue-erek-span-badge"
          :style="{ backgroundColor: item.badgeColor }"
        ></span>
        {{ item.text }}
      </p>
    </div>
    <div
      ref="erek_line"
      :style="{ width: width, height: height, marginTop: '-50px' }"
    ></div>
  </div>
</template>

<script>
import configOptions from '../../config/echarts/line.config';
export default {
  name: 'VueErekLine',
  props: {
    width: {
      type: String,
      default: '50%'
    },
    height: {
      type: String,
      default: '400px'
    },
    itemList: {
      type: Array,
      default: function() {
        return {};
      }
    },
    xAxis: {
      type: Object,
      default: function() {
        return {};
      }
    },
    yAxis: {
      type: Object,
      default: function() {
        return {};
      }
    },
    series: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    drawLineEcharts() {
      let lineEcharts = this.$echarts.init(this.$refs.erek_line);
      let newOptions = Object.assign(configOptions, {
        series: this.series,
        xAxis: this.xAxis,
        yAxis: this.yAxis
      });
      lineEcharts.setOption(newOptions);
    }
  },
  mounted() {
    setTimeout(() => {
      this.drawLineEcharts();
    }, 1000);
    console.log(222);
  }
};
</script>

<style lang="scss" scoped>
.vue-erek-line-container {
  width: 100%;
  padding: 24px;

  .vue-layout-header-line {
    width: 100%;
    height: 20px;

    > p.vue-erek-line-title {
      color: #3b3b3b;
      font-size: 15px;
      font-weight: 600;
      float: left;
      margin-left: 30px;
      margin-right: 30px;
    }
  }
}
.vue-erek-span-badge {
  position: relative;
  padding: 6px;
  margin-right: 5px;
  border-radius: 3px;
  display: inline-block;
}
</style>
