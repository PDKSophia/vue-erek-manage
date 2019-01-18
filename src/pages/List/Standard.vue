<template>
  <div class="vue-erek-standlist-container">
    <div class="vue-flex-item" v-for="(item, index) in data" :key="index">
      <div class="vue-erek-item-meta">
        <div class="vue-erek-item-meta-avatar">
          <img class="vue-erek-item-meta-avatar-image" :src="item.avatar" alt />
        </div>
        <div class="vue-erek-item-meta-content">
          <h4 class="vue-erek-item-meta-title">{{ item.username }}</h4>
          <div class="vue-erek-item-meta-summary">{{ item.content }}</div>
        </div>
      </div>
      <div class="vue-erek-item-content">
        <div class="vue-erek-list-listContent">{{ item.department }}</div>
        <div class="vue-erek-list-listContent">{{ item.phone }}</div>
      </div>
      <div class="vue-erek-item-action">
        <ul>
          <li class="vue-erek-edit" @click="handleOnClickEdit(item)">编辑</li>
          <li class="vue-erek-delete" @click="handleOnClickDelete(item)"
            >删除</li
          >
        </ul>
      </div>
    </div>
    <Spin size="large" fix v-if="isFetching"></Spin>
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
import { mapState } from 'vuex';
export default {
  name: 'StandardItemComponents',
  computed: mapState({
    isFetching: state => state.global.isFetching
  }),
  props: {
    data: {
      type: Array,
      default: function() {
        return [];
      }
    },
    pagination: {
      type: Object,
      defualt: function() {
        return [];
      }
    }
  },
  watch: {
    pagination: {
      handler(newVal) {
        console.log(newVal);
      }
    }
  },
  methods: {
    handleOnClickEdit(item) {
      this.$emit('onHandleClickStandItem', item, 'edit');
    },
    handleOnClickDelete(item) {
      this.$emit('onHandleClickStandItem', item, 'delete');
    }
  }
};
</script>

<style lang="scss" scoped>
.vue-erek-standlist-container {
  width: 100%;
  color: rgba(0, 0, 0, 0.45);
  position: relative;

  > .vue-flex-item {
    width: 100%;
    padding-top: 22px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e8e8e8;
    display: flex;
    align-items: center;

    > .vue-erek-item-meta {
      align-items: flex-start;
      display: flex;
      width: 60%;

      > .vue-erek-item-meta-avatar {
        margin-right: 10px;

        > .vue-erek-item-meta-avatar-image {
          width: 48px;
          height: 48px;
          border-radius: 4px;
        }
      }

      > .vue-erek-item-meta-content {
        width: 80%;
        > .vue-erek-item-meta-title {
          margin-bottom: 4px;
          font-size: 14px;
          line-height: 22px;
          color: rgba(0, 0, 0, 0.65);
        }
        > .vue-erek-item-meta-summary {
          font-size: 14px;
          line-height: 22px;
          color: rgba(0, 0, 0, 0.45);
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }

    > .vue-erek-item-content {
      display: flex;
      width: 25%;
      justify-content: flex-end;
      align-items: center;
      font-size: 14px;

      > .vue-erek-list-listContent {
        text-align: right;
        margin-left: 30px;
      }
    }

    > .vue-erek-item-action {
      display: flex;
      width: 15%;
      justify-content: flex-end;
      align-items: center;
      font-size: 14px;

      > ul {
        list-style: none;
        display: inline-flex;

        > .vue-erek-edit {
          color: #2894ff;
          margin-right: 15px;
        }

        > .vue-erek-delete {
          color: #f5222d;
        }
      }
    }
  }
}
.vue-erek-edit:hover,
.vue-erek-delete:hover {
  cursor: pointer;
}
</style>
