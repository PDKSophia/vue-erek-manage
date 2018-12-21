<template>
  <div class="vue-exception-error-container">
    <img class="error-image" src="../../../assets/exception/500.png" alt="403">
    <div style="marginTop: -4%">
      <h1>500</h1>
      <h3>抱歉，服务器出错了</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueErekException403'
};
</script>

<style scoped lang="scss">
.vue-exception-error-container {
  text-align: center;
  display: -webkit-box;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-box-orient: horizontal;
  background-color: #fff;
  height: 90%;
  width: 100%;

  > .error-image {
    width: 285px;
    height: 220px;
    margin-top: -20%;
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
