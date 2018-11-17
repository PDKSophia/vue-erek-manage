<template>
  <div class="vue-exception-error-container">
    <img class="error-image" src="../../../assets/exception/500.png" alt="403" />
    <div>
      <h1>500</h1>
      <h3>抱歉，服务器出错了</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueErekException403',
}
</script>

<style scoped lang='scss'>
.vue-exception-error-container {
  text-align: center;
  display: -webkit-box;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-box-orient:horizontal;
  margin-top: 13%;

  >.error-image {
    width: 285px;
    height: 220px;
  }
}
h1 {
  font-size: 52px;
  color: #7a7a7a;
}
h3 {
  margin-bottom: 10px;
  color: #7a7a7a;
}
</style>
