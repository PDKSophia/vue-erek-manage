<template>
  <div class="erek-standard-container">
    <vue-stand-card :taskList="taskList" />
    <vue-divider :bgColor="divider.bgColor" :height="divider.height" />
    <div class="erek-standard-list">
      <h3>所有待办任务</h3>
      <Button type="dashed" long icon="ios-add">新增</Button>
      <erek-stand-list
        :data="standConfig.data"
        :pagination="standConfig.pagination"
        @onHandleClickStandItem="handleCallback"
      ></erek-stand-list>
    </div>
  </div>
</template>

<script>
import VueStandCard from '../../../components/StandCardComponents/Index.vue';
import VueDivider from '../../../components/DividerComponents/Divider.vue';
import ErekStandList from '../../../pages/List/Standard.vue';
export default {
  name: 'ErekStandardList',
  components: {
    VueStandCard,
    VueDivider,
    ErekStandList
  },
  data() {
    return {
      taskList: [],
      divider: {
        bgColor: '#f5f7f9',
        height: '30px'
      },
      standConfig: {
        data: [],
        pagination: {
          hasPage: true,
          pageNum: 0,
          pageSize: 0,
          total: 0
        }
      }
    };
  },
  methods: {
    handleCallback(value, type) {
      this.$tool.toastTips(
        'info',
        `你当前点击类型 : ${type}, 点击的item id为 : ${value.id}`,
        1
      );
    }
  },
  mounted() {
    // 请求获取所有任务
    this.$api.list.fetchAllTaskList().then(res => {
      for (let i = 0; i < res.length; i++) {
        this.taskList.push(res[i]);
      }
    });
    // 请求获取数据
    this.$api.list.fetchRequestStandardApi().then(res => {
      this.standConfig.data = [...res.list];
      this.standConfig.pagination = {
        hasPage: true,
        pageNum: res.current,
        pageSize: res.size,
        total: res.total
      };
    });
  }
};
</script>

<style scoped lang="scss">
.erek-standard-container {
  // height: 100%;
  width: 100%;
  background-color: #fff;

  > .erek-standard-list {
    padding: 12px 24px;
    line-height: 40px;
  }
}
</style>
