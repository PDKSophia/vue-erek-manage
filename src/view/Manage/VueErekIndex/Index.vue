<template>
  <div>
    <div class="vue-erek-home-up">
      <hoc-echarts-line :lineData="lineData"/>
      <div class="vue-erek-right-box" :style="{ height: 'height' }">
        <p class="vue-erek-right-box-title">数据卡片</p>
        <hoc-echarts-card :data="tabData"/>
      </div>
    </div>
    <vue-divider :bgColor="divider.bgColor" :height="divider.height"></vue-divider>
    <div class="vue-erek-home-down">
      <hoc-echarts-radar :radarData="radarData"/>
      <hoc-echarts-pie :pieData="pieData"></hoc-echarts-pie>
      <hoc-echarts-radar :radarData="radarData"/>
    </div>
  </div>
</template>

<script>
import HocEchartsLine from 'components/HigherOrderComponent/HOC-EchartLine.vue';
import HocEchartsPie from 'components/HigherOrderComponent/HOC-EchartPie.vue';
import HocEchartsRadar from 'components/HigherOrderComponent/HOC-EchartRadar.vue';
import HocEchartsCard from 'components/HigherOrderComponent/HOC-EchartCard.vue';
import VueDivider from 'components/CommonComponents/Divider/Index.vue';
export default {
  name: 'ErekManageHome',
  components: {
    HocEchartsLine,
    HocEchartsPie,
    HocEchartsRadar,
    HocEchartsCard,
    VueDivider
  },
  data() {
    return {
      lineData: {}, // 折线数据
      tabData: [], // 数据卡片
      pieData: [], // 饼图数据
      divider: {
        bgColor: '#f5f7f9',
        height: '30px'
      },
      radarData: {} // 雷达图数据
    };
  },
  mounted() {
    // 请求 `获取平台近7天的访问量与注册量`
    this.$api.echarts.fetchPlatformView(7).then(res => {
      this.lineData = { ...res };
    });
    // 请求拿到 `卡片数据`
    this.$api.list.fetchTotalCardList().then(res => {
      this.tabData = [...res];
    });
    // 请求拿到 `站点访问来源数据`
    this.$api.echarts.fetchPlatformOrigin().then(res => {
      this.pieData = [...res];
    });
    // 请求拿到 `预算开销和实际开销`
    this.$api.echarts.fetchPlatformExpense().then(res => {
      this.radarData = { ...res };
    });
  }
};
</script>

<style scoped lang="scss">
.vue-erek-home-up {
  width: 100%;
  height: 100%;
  background-color: #fff;
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
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}
</style>
