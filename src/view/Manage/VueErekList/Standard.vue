<template>
  <div class="erek-standard-container">
    <vue-scale-card :tabArray='tabArray'/>
    <vue-erek-br :bgColor='hrObj.bgColor' :height='hrObj.height' />
    <div class='erek-standard-list'>
      <h3>所有待办任务</h3>
      <Button type="dashed" long icon="ios-add">新增</Button>
      <erek-stand-list
        :standlist='standlist'
        @onHandleClickStandItem='handleEmitClickItem'
      ></erek-stand-list>
    </div>
  </div>
</template>

<script>
import VueScaleCard from '../../../erekComponents/VueErekScaleCard/ScaleCard.vue'
import VueErekBr from '../../../erekComponents/VueErekBr/vue-erek-br.vue'
import ErekStandList from '../../../erekPages/StandardList/Index.vue'
import tabconfig from '../../../config/tab'
export default {
  name: 'ErekStandardList',
  components: {
    VueScaleCard,
    VueErekBr,
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
  methods: {
    handleEmitClickItem (value, type) {
      this.$tool.toastTips('info', `你当前点击 : ${type}, 点击的item id为 : ${value.id}`, 1)
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
    this.$api.fetchStandAllDataList().then((res) => {
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
