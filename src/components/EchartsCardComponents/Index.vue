<template>
  <div class="erek-flex-container">
    <div
      class="erek-card-box"
      v-for="(tab, index) in data"
      :style="{
        width: tab.width
      }"
      :class="tab.classes"
      :key="index"
    >
      <p class="erek-text">{{ tab.text }}</p>
      <h1 class="values_text">{{ tab.value }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EchartCardComponents',
  props: {
    data: {
      type: Array,
      default: function () {
        return [];
      }
    }
  },
  mounted() { }
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
    padding: 24px 0;

    > .erek-text {
      font-size: 15px;
      margin-bottom: 5px;
    }

    > h1.values_text {
      font-size: 36px;
      color: #ffffff;
    }
  }

  .erek-card-box:hover {
    transform: rotate(360deg) scale(1.06);
    -webkit-transform: rotate(360deg) scale(1.06);
    -moz-transform: rotate(360deg) scale(1.06);
    -o-transform: rotate(360deg) scale(1.06);
    -ms-transform: rotate(360deg) scale(1.06);
  }
}
.card_paper_0 {
  background-color: #3498d9;
  color: #ffffff;
  border-color: #3498d9;
}
.card_paper_1 {
  background-color: #00c099;
  color: #ffffff;
  border-color: #00c099;
}
.card_paper_2 {
  background-color: #85d4f0;
  color: #ffffff;
  border-color: #85d4f0;
}
.card_paper_3 {
  background-color: #7289c7;
  color: #ffffff;
  border-color: #7289c7;
}
</style>
