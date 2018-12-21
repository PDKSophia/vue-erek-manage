<template>
  <div class="vue-erek-meta-achievement">
    <p class="erek-title">{{ badgeData.namespace }}</p>
    <div class="vue-erek-box-badge-box">
      <div class="vue-erek-badge-cell" v-for="(item, index) in badgeData.data" :key="index">
        <div class="vue-erek-badge-cell-title">
          <p>{{ item.name }}</p>
        </div>
        <div class="vue-erek-badge-cell-content">
          <div v-for="(cell, key) in item.data" :key="key">
            <p
              class="vue-erek-badge-cell-content-value"
              :style="{ color: badgeData.valueColor }"
            >{{ cell.value }}</p>
            <p class="vue-erek-badge-cell-content-text">{{ cell.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueErekBadge',
  props: {
    badgeData: {
      type: Object,
      default: function () {
        return {};
      }
    }
  }
};
</script>

<style scoped lang="scss">
.vue-erek-meta-achievement {
  width: 100%;
  padding: 10px;

  > .erek-title {
    padding: 10px 0 20px 14px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.65);
  }

  > .vue-erek-box-badge-box {
    display: flex;
    flex-wrap: wrap;

    > .vue-erek-badge-cell {
      width: 48%;
      border: 1px solid #f5f5f5;
      border-radius: 4px 4px 0 0;
      font-size: 16px;
      overflow: hidden;
      background: #f7f7f7;
      margin: 0 1% 2%;

      > .vue-erek-badge-cell-title {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.65);
        text-align: left;
        padding: 8px;
      }

      > .vue-erek-badge-cell-content {
        display: flex;
        background: white;
        flex: 1;
        justify-content: space-around;
        align-items: center;
        padding: 13px 3px;
        text-align: center;

        .vue-erek-badge-cell-content-value {
          font-size: 18px;
          color: rgba(0, 0, 0, 0.75);
          font-weight: 600;
        }
        .vue-erek-badge-cell-content-text {
          color: rgba(0, 0, 0, 0.45);
          margin-top: 6px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
