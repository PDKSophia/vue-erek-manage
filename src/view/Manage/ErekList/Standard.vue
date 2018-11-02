<template>
  <div class="erek-standard-container">
    <vue-erek-card-badge :tabArray='tabArray'/>
    <erek-br :bgColor='hrObj.bgColor' :height='hrObj.height'></erek-br>
    <div class='erek-standard-list'>
      <h3>所有待办任务</h3>
      <Button type="dashed" long icon="ios-add">新增</Button>
      <erek-stand-list :standlist='standlist'></erek-stand-list>
    </div>
  </div>
</template>

<script>
import VueErekCardBadge from '../../../common/ErekCardBadge/vue-erek-card-badge.vue'
import ErekBr from '../../../common/ErekBr/vue-erek-br.vue'
import ErekStandList from '../../../components/StandardList/vue-erek-standard-list.vue'
import tabconfig from '../../../config/tab'
export default {
  name: 'ErekStandardList',
  components: {
    VueErekCardBadge,
    ErekBr,
    ErekStandList
  },
  data () {
    return {
      tabArray: [],
      hrObj: {
        bgColor: '#f5f7f9',
        height: '30px'
      },
      standlist: []
    }
  },
  mounted() {
    // 请求获取所有任务
    this.$api.getAllTaskList().then(res => {
      for (let i = 0; i < res.length; i++) {
        let conf = Object.assign({}, tabconfig, {
          width: '33.33%',
          text: res[i].text,
          value: res[i].value
        })
        this.tabArray.push(conf)
      }
    })
    // 请求获取数据
    this.$api.fetchAllDataList().then((res) => {
      this.standlist = res
    })
  },
}
</script>

<style scoped lang='scss'>
.erek-standard-container {
  height: 100%;
  width: 100%;

  > .erek-standard-list {
    padding: 12px 24px;
    line-height: 40px;
  }
}
</style>
