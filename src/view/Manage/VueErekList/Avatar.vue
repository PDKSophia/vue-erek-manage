<template>
  <div class="vue-erek-avatar-box">
    <div class="erek-page-1-container">
      <Row :gutter="16">
        <i-col span="22">
          <p class="erek-page-2-title">Erek Team</p>
        </i-col>
        <i-col span="2">
          <float-button/>
        </i-col>
      </Row>
    </div>
    <div class="erek-page-3-container">
      <avatar-item-list :data="list.data" :pagination="list.pagination"/>
    </div>
  </div>
</template>

<script>
import FloatButton from 'components/CommonComponents/FloatButton/Index';
import AvatarItemList from 'components/FrameComponents/List/Avatar.vue';
export default {
  name: 'AvatarListCompoment',
  components: {
    FloatButton,
    AvatarItemList
  },
  data() {
    return {
      list: {
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
  mounted() {
    // 发送请求获取数据信息
    this.$api.list.fetchRequestStandardApi().then(res => {
      this.list.data = res.list;
      this.list.pagination = {
        hasPage: true,
        pageNum: res.current,
        pageSize: res.size,
        total: res.total
      };
    });
  }
};
</script>

<style lang="scss" scoped>
.vue-erek-avatar-box {
  padding: 24px 24px;
  width: 100%;
  background-color: #fff;

  .erek-page-1-container {
    padding-bottom: 10px;
    border-bottom: 1px solid #f1f1f1;
    .erek-page-2-title {
      color: rgba(0, 0, 0, 0.87);
      font-size: 1.3rem;
      font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
      font-weight: 400;
      line-height: 1.33;
      letter-spacing: 0em;
      margin-top: 0.7rem;
    }
  }
}
</style>
