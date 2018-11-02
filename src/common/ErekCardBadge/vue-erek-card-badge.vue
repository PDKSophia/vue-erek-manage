<template>
  <div class="erek-flex-container">
    <div class='erek-card-box' 
      v-for="(tab, index) in tabArray" 
      :style='{ backgroundColor: tab.bgColor, color: tab.color, borderColor: tab.borderColor, width: tab.width }'
      :key="index" >
       <p class="erek-text">{{ tab.text }}</p>
       <h1 :style='{ color: tab.valueColor, fontSize: "30px" }'>{{ tab.value }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueErekTab',
  props: {
    tabArray: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  mounted() {
  },
}
</script>

<style scoped lang='scss'>
.erek-flex-container {
  display: flex;
  width: 100%;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  align-items: center;

  > .erek-card-box {
    border: 1px solid #f5f7f9;
    background-color: #f5f7f9;
    padding: 24px 0;

    > .erek-text {
      font-size: 15px;
      margin-bottom: 5px;
    }
  }

  .erek-card-box:hover{
    transform: rotate(360deg) scale(1.2);
    -webkit-transform: rotate(360deg) scale(1.2);
    -moz-transform: rotate(360deg) scale(1.2);
    -o-transform: rotate(360deg) scale(1.2);
    -ms-transform: rotate(360deg) scale(1.2)
  }

}
</style>
