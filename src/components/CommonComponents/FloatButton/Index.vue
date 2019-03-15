<template>
  <div class="button-container">
    <Icon class="button-icon" :type="btnConfig.iconType"/>
  </div>
</template>

<script>
export default {
  name: 'FloatButtonCompoents',
  props: {
    btnConfig: {
      type: Object,
      default: function () {
        return {
          iconType: 'ios-add'
        };
      }
    }
  }
};
</script>

<style scoped lang="scss">
.button-container {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: rgb(63, 81, 181);
  color: #ffffff;
  display: flex;
  align-items: center;
  text-justify: center;
  text-align: center;

  > .button-icon {
    font-size: 36px;
    margin: auto;
  }
}
</style>
