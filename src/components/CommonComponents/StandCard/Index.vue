<template>
  <div class="erek-flex-container">
    <div
      class="erek-card-box"
      v-for="(tab, index) in taskList"
      :style="{
        backgroundColor: config.BG_COLOR,
        color: config.LABEL_FONT_COLOR,
        borderColor: config.BORDER_COLOR,
        width: config.WIDTH
      }"
      :key="index"
    >
      <p class="erek-text">{{ tab.text }}</p>
      <h1
        :style="{
          color: config.VALUE_FONT_COLOR,
          fontSize: config.VALUE_FONT_SIZE
        }"
      >{{ tab.value }}</h1>
    </div>
  </div>
</template>

<script>
import { standCard } from 'ekconfig/global';
export default {
  name: 'StandCardComponents',
  props: {
    taskList: {
      type: Array,
      default: function () {
        return [];
      }
    }
  },
  data() {
    return {
      config: {}
    };
  },
  mounted() {
    this.config = { ...standCard };
  }
};
</script>

<style scoped lang="scss">
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

  .erek-card-box:hover {
    cursor: pointer;
    transform: rotate(360deg) scale(1.1);
    -webkit-transform: rotate(360deg) scale(1.1);
    -moz-transform: rotate(360deg) scale(1.1);
    -o-transform: rotate(360deg) scale(1.1);
    -ms-transform: rotate(360deg) scale(1.1);
  }
}
</style>
