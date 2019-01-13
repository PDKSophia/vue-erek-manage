<template>
  <div class="vue-erek-profile-container">
    <header>
      <div class="vue-erek-meta-header">
        <div class="vue-erek-meta-flex-row"> <h2>退款申请</h2> </div>
        <div class="vue-erek-meta-flex-row">
          <div class="vue-erek-meta-item">
            <p>取货单号 {{ commodity.detail.id }}</p>
            <p>子订单 {{ commodity.detail.child_id }}</p>
          </div>
          <div class="vue-erek-meta-item">
            <p>状态 {{ commodity.detail.status }}</p>
          </div>
          <div class="vue-erek-meta-item">
            <p>销售单号 {{ commodity.detail.sell_id }}</p>
          </div>
        </div>
      </div>
    </header>
    <divider-line :height="divider.height" :bgColor="divider.bgColor" />
    <div class="erek-progress-step-container">
      <h3 class="erek-progress-title">用户信息</h3>
      <div class="erek-progress-step">
        <div class="vue-erek-meta-flex-row">
          <div class="vue-erek-meta-item">
            <p>用户姓名: {{ commodity.user.name }}</p>
            <p>取货地址: {{ commodity.user.address }}</p>
          </div>
          <div class="vue-erek-meta-item">
            <p>联系电话: {{ commodity.user.phone }}</p>
            <p>备注: {{ commodity.user.desc }}</p>
          </div>
          <div class="vue-erek-meta-item">
            <p>常用快递: {{ commodity.user.postman }}</p>
          </div>
        </div>
      </div>
    </div>
    <divider-line :height="divider.height" :bgColor="divider.bgColor" />
    <div class="erek-tabs-container">
      <Tabs value="tabOne">
        <TabPane label="退货商品" name="tabOne">
          <erek-table
            :border="commodity.tableConfig.border"
            :stripe="commodity.tableConfig.stripe"
            :size="commodity.tableConfig.size"
            :data="commodity.tableConfig.data"
            :pagination="commodity.tableConfig.pagination"
          />
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import DividerLine from '../../../components/DividerComponents/Divider';
import ErekTable from '../../../components/ProfileTableComponents/BaseTable.vue';
export default {
  name: 'VueErekBaseProfile',
  components: {
    DividerLine,
    ErekTable
  },
  data() {
    return {
      divider: {
        height: '20px',
        bgColor: '#f5f7f9'
      },
      commodity: {
        detail: {},
        user: {},
        tableConfig: {
          border: false,
          stripe: false,
          size: 'large',
          data: [],
          pagination: {
            hasPage: false,
            pageNum: 0,
            pageSize: 0,
            total: 0
          }
        }
      }
    };
  },
  mounted() {
    // 发送请求获取数据信息
    this.$api.list.fetchCommodityProfile(10001).then(res => {
      this.commodity = {
        detail: { ...res.detail },
        user: { ...res.user },
        tableConfig: {
          ...this.commodity.tableConfig,
          data: [...res.goodlist]
        }
      };
    });
  }
};
</script>

<style lang="scss" scoped>
.vue-erek-profile-container {
  width: 100%;
  height: 100%;
  background-color: #fff;

  .vue-erek-meta-header {
    padding: 30px 30px;
  }
}
.vue-erek-meta-flex-row {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-variant: tabular-nums;
  color: rgba(0, 0, 0, 0.85);
  box-sizing: border-box;
  margin-bottom: 16px;
  justify-content: space-between;

  .vue-erek-meta-item {
    width: 33%;
    margin-right: 0.33%;
    line-height: 28px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);

    p.meta-desc {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}

.erek-progress-step-container {
  width: 100%;
  background-color: #fff;
  > .erek-progress-title {
    padding: 12px 30px;
    border-bottom: 1px solid #f1f1f1;
    color: rgba(0, 0, 0, 0.82);
    font-size: 1rem;
  }
  > .erek-progress-step {
    padding: 30px 30px;
  }
}

.erek-tabs-container {
  width: 100%;
  background-color: #fff;
  padding: 12px 30px 40px;
}
</style>
