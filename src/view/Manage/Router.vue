<template>
  <div id="erek-manage-container">
    <Layout>
      <erek-header />
      <erek-sider :Menu='Menu' :BreadItem='BreadItem'/>
    </Layout>
  </div>
</template>

<script>
import ErekHeader from '../../components/Layouts/erek-manage-header.vue'
import ErekSider from '../../components/Layouts/erek-manage-sider.vue'
import Menu from '../../config/menu'
import BreadItem from '../../config/breadItem'
export default {
  name: 'ErekManageContainer',
  components: {
    ErekHeader,
    ErekSider
  },
  data () {
    return {
      Menu: Menu,
      BreadItem: '首页'
    }
  },
  watch: {
    $route: { // 路由监听
      handler: function(val) {
        // console.log('新路由: ', val)
        for (let key in BreadItem) {
          if (val.path == key) {
            this.BreadItem = BreadItem[key]
          }
        }
      },
      deep: true
    }
  }
}
</script>
<style scoped lang='scss'>

</style>
