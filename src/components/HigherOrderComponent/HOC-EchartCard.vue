<template>
  <div class="hoc-element"> <echarts-card :data="list" /> </div>
</template>

<script>
import EchartsCard from '../EchartsCardComponents/Index';
export default {
  name: 'HOCEchartsCard',
  components: {
    EchartsCard
  },
  props: {
    data: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      list: []
    };
  },
  watch: {
    data: {
      handler(newVal) {
        if (newVal) {
          this.list = [];
          const newData = newVal.map((item, index) => {
            return {
              width: '50%',
              classes: `card_paper_${index}`,
              text: item.text,
              value: item.value
            };
          });
          this.list = [...newData];
        } else {
          this.list = [];
        }
      }
    }
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
    transform: rotate(360deg) scale(1.1);
    -webkit-transform: rotate(360deg) scale(1.1);
    -moz-transform: rotate(360deg) scale(1.1);
    -o-transform: rotate(360deg) scale(1.1);
    -ms-transform: rotate(360deg) scale(1.1);
  }
}
</style>
