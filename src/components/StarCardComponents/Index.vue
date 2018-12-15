<template>
  <div>
    <Card class="vue-other-card-item-container">
      <p slot="title" class="vue-other-card-item-title">
        <!-- <Icon type="ios-film-outline"></Icon> -->
        {{ CardItem.title }}
      </p>
      <a href="/#/erek-manage/erek-user/information" slot="extra" :style='{color: "#317f96"}'>
        <Icon type="ios-loop-strong"></Icon>
        {{ CardItem.subtitle }}
      </a>
      <ul style='lineHeight: 30px'>
        <li v-for="(item, index) in CardItem.data" :key="index">
          <a :href="item.url" target="_blank" :style='{color: "#317f96"}'>{{ item.name }}</a>
          <span style='float: right;'>
            <Icon color='#ffbe55' type="ios-star" v-for="n in 4" :key="n"></Icon>
            <Icon color='#ffbe55' type="ios-star" v-if="item.rate >= 9.5"></Icon>
            <Icon color='#ffbe55' type="ios-star-half" v-else></Icon>
            {{ item.rate }}
          </span>
        </li>
      </ul>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'ErekStartCardComponents',
  props: {
    CardItem: {
      type: Object,
      default: function() {
        return {}
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.vue-other-card-item-container {
  width: 96%;
  margin: 0 2%;
  
  .vue-other-card-item-title {
    color: rgba(0, 0, 0, 0.55);
  }
}
</style>
