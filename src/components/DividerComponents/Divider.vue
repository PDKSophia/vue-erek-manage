<template>
  <div
    class="vue-erek-br"
    :style="{ backgroundColor: bgColor, height: height }"
  ></div>
</template>

<script>
export default {
  name: 'DividerComponents',
  props: {
    height: {
      type: String,
      default: '20px'
    },
    bgColor: {
      type: String,
      default: '#f5f7f9'
    }
  }
};
</script>

<style scoped lang="scss">
.vue-erek-br {
  background: #f5f7f9;
  height: 20px;
  width: 100%;
}
</style>
