<template>
  <div class="vue-exception-error-container">
    <img
      class="error-image"
      src="../../../assets/exception/404.png"
      alt="403"
    />
    <div class="error-content">
      <h1>404</h1> <h3>抱歉，你访问的页面不存在</h3>
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
  height: 660px;
  width: 100%;

  > .error-image {
    width: 200px;
    height: 230px;
  }
}
.error-content {
  padding-left: 20px;
}
h1 {
  margin-top: 20px;
  font-size: 52px;
  color: #7a7a7a;
}
h3 {
  margin-bottom: 10px;
  color: #7a7a7a;
}
</style>
