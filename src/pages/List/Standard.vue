<template>
  <div class="vue-erek-standlist-container">
    <div class="vue-flex-item" v-for="(item, index) in standlist" :key="index">
      <div class="vue-erek-item-meta">
        <div class="vue-erek-item-meta-avatar">
          <img
            class="vue-erek-item-meta-avatar-image"
            :src="item.avatar"
            alt=""
          />
        </div>
        <div class="vue-erek-item-meta-content">
          <h4 class="vue-erek-item-meta-title">{{ item.username }}</h4>
          <div class="vue-erek-item-meta-summary"> {{ item.content }} </div>
        </div>
      </div>
      <div class="vue-erek-item-content">
        <div class="vue-erek-list-listContent"> {{ item.department }} </div>
        <div class="vue-erek-list-listContent"> {{ item.phone }} </div>
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
  </div>
</template>

<script>
export default {
  name: 'ErekStandardList',
  props: {
    standlist: {
      type: Array,
      default: function() {
        return [];
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

  > .vue-flex-item {
    width: 100%;
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #e8e8e8;
    display: flex;
    align-items: center;

    > .vue-erek-item-meta {
      align-items: flex-start;
      display: flex;
      flex: 2 1;

      > .vue-erek-item-meta-avatar {
        margin-right: 10px;

        > .vue-erek-item-meta-avatar-image {
          width: 48px;
          height: 48px;
          border-radius: 4px;
        }
      }

      > .vue-erek-item-meta-content {
        flex: 1 0;

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
        }
      }
    }

    > .vue-erek-item-content {
      display: flex;
      flex: 1 1;
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
      flex: 1 0;
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
