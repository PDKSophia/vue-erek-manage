<template>
  <div>
    <div class="vue-erek-home-up">
      <hoc-echarts-line :lineData="visitList"/>
      <div class="vue-erek-right-box" :style="{ height: 'height' }">
        <p class="vue-erek-right-box-title">数据卡片</p>
        <hoc-echarts-card :data="cardList"/>
      </div>
    </div>
    <vue-divider :bgColor="divider.bgColor" :height="divider.height"></vue-divider>
    <div class="vue-erek-home-down">
      <hoc-echarts-radar :radarData="expenseList"/>
      <hoc-echarts-pie :pieData="originList"></hoc-echarts-pie>
      <hoc-echarts-radar :radarData="expenseList"/>
    </div>
  </div>
</template>

<script>
import HocEchartsLine from 'components/HigherOrderComponent/HOC-EchartLine.vue'
import HocEchartsPie from 'components/HigherOrderComponent/HOC-EchartPie.vue'
import HocEchartsRadar from 'components/HigherOrderComponent/HOC-EchartRadar.vue'
import HocEchartsCard from 'components/HigherOrderComponent/HOC-EchartCard.vue'
import VueDivider from 'components/CommonComponents/Divider/Index.vue'
import { mapState } from 'vuex'

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
      divider: {
        bgColor: '#f5f7f9',
        height: '30px'
      }
    }
  },
  computed: mapState({
    cardList: state => state.echarts.cardList, // 数据卡片
    visitList: state => state.echarts.visitList,// 折线数据
    originList: state => state.echarts.originList, // 饼图数据
    expenseList: state => state.echarts.expenseList // 雷达图数据
  }),
  async mounted() {
    await this.$store.dispatch('echarts/retrieveCardDataAsync')
    await this.$store.dispatch('echarts/retrieveVisitDataAsync')
    await this.$store.dispatch('echarts/retrieveOriginDataAsync')
    await this.$store.dispatch('echarts/retrieveExpenseDataAsync')
  }
}
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
