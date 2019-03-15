<template>
  <div class="erek-avatar-list-container">
    <div class="pager-row-0-container">
      <div class="pager-row-column-cell" v-for="(item, index) in data" :key="index">
        <div class="erek-paper-container-1">
          <div class="erek-paper-content-2">
            <img class="erek-paper-avatar-3" :src="item.avatar" alt>
            <h4 class="erek-pager-text-4">{{ item.username }}</h4>
            <h4 class="erek-pager-text-4">ID: {{ item.id }}</h4>
            <h4 class="erek-pager-text-4">员工号: {{ item.staffID }}</h4>
          </div>
          <div class="erek-paper-action-5">
            <button class="erek-button-base-6 update-button">查看</button>
            <button class="erek-button-base-6 update-button">编辑</button>
            <button class="erek-button-base-6 delete-button">删除</button>
          </div>
        </div>
      </div>
    </div>
    <div style="margin: 30px 0px; overflow: hidden" v-show="pagination.hasPage">
      <div style="float: right;">
        <Page
          :total="pagination.total"
          :current="pagination.pageNum"
          :pageSize="pagination.pageSize"
          showSizer
        ></Page>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AvatarItemComponents',
  props: {
    data: {
      type: Array,
      default: function () {
        return [];
      }
    },
    pagination: {
      type: Object,
      defualt: function () {
        return [];
      }
    }
  },
  data() {
    return {
      MEDIA: {
        XS: 12,
        SM: 8,
        MD: 7,
        LG: 5
      }
    };
  }
};
</script>

<style scoped lang="scss">
.erek-avatar-list-container {
  width: 100%;
  color: rgba(0, 0, 0, 0.45);
  padding-top: 12px;

  .pager-row-0-container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;

    > .pager-row-column-cell {
      width: 18.4%;
      margin-right: 1.6%;

      .erek-paper-container-1 {
        margin: 12px;
        width: 100%;
        border-radius: 4px;
        background-color: #fff;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
          'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
          0px 2px 1px -1px rgba(0, 0, 0, 0.12);
        padding: 0;

        > .erek-paper-content-2 {
          padding: 30px 16px;
          text-align: center;

          > .erek-paper-avatar-3 {
            width: 100px;
            height: 100px;
            border-radius: 10px;
            margin-bottom: 15px;
          }
          > .erek-pager-text-4 {
            color: rgba(0, 0, 0, 0.87);
            font-size: 0.875rem;
            font-weight: 400;
            font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
            line-height: 1.46429em;
          }
        }

        > .erek-paper-action-5 {
          display: flex;
          border-top: 1px solid #ddd;
          padding-left: 0;
          padding-right: 0;
          justify-content: space-around;
          padding: 8px 4px;
          box-sizing: border-box;
          align-items: center;

          > .erek-button-base-6 {
            padding: 4px 8px;
            min-width: 64px;
            font-size: 0.8125rem;
            min-height: 31px;
            border: 0;
            margin: 0;
            cursor: pointer;
            display: inline-flex;
            outline: none;
            padding: 0;
            position: relative;
            line-height: 1.3125;
            font-weight: 500;
            font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
            border-radius: 4px;
            text-transform: uppercase;
            align-items: center;
            vertical-align: middle;
            justify-content: center;
            background-color: #ffffff;
          }

          > .update-button {
            color: #3f51b5;
          }
          > .delete-button {
            color: #f50057;
          }
        }
      }
    }
  }
}
</style>
