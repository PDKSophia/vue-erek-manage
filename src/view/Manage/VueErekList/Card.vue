<template>
  <div class="erek-card-container">
    <div class="erek-card-list">
      <erek-card-list :data="cardConfig.data" :pagination="cardConfig.pagination"/>
    </div>
  </div>
</template>

<script>
import ErekCardList from '../../../pages/List/Card.vue'
export default {
  name: 'ErekCardListComponet',
  components: {
    ErekCardList
  },
  data() {
    return {
      cardConfig: {
        data: [],
        pagination: {
          hasPage: true,
          pageNum: 0,
          pageSize: 0,
          total: 0
        }
      }
    }
  },
  mounted() {
    // 请求获取数据
    this.$api.list.fetchRequestCardApi().then(res => {
      this.cardConfig.data = [...res.list]
      this.cardConfig.pagination = {
        hasPage: true,
        pageNum: res.current,
        pageSize: res.size,
        total: res.total
      }
    })
  },
}
</script>

<style scoped lang="scss">
.erek-card-container {
  height: 100%;
  width: 100%;
  background-color: #f5f7f9;

  > .erek-card-list {
  }
}
</style>
