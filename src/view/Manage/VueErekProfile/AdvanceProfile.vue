<template>
  <div class="vue-erek-profile-container">
    <header>
      <div class="vue-erek-meta-header">
        <div class="vue-erek-meta-flex-row">
          <h1>地铁车辆通用技术条件</h1>
          <div class="vue-erek-meta-actions">
            <Row :gutter="6">
              <i-col span="8">
                <Button @click="handleActionOne">操作一</Button>
              </i-col>
              <i-col span="8">
                <Button @click="handleActionTwo">操作二</Button>
              </i-col>
              <i-col span="8">
                <Button type="primary" @click="handleActionThree"
                  >主操作</Button
                >
              </i-col>
            </Row>
          </div>
        </div>
        <div class="vue-erek-meta-flex-row">
          <div class="vue-erek-meta-content">
            <Row :gutter="30">
              <i-col span="12">
                <p>仓库编号 : VErek-2018-1031</p> <p>创建人 : 彭道宽111</p>
                <p>创建时间 : 2018-10-31 19:20</p>
              </i-col>
              <i-col span="12">
                <p>所属组织 : Github</p> <p>所属分类 : Erek-Net</p>
                <p class="meta-desc"
                  >备注 : Erek-Net下的一款开源后台管理快速开发框架</p
                >
              </i-col>
            </Row>
          </div>
          <div class="vue-erek-meta-extraContent">
            <Row :gutter="30">
              <i-col span="12">
                <p class="meta-extra-label">状态</p>
                <p class="meta-extra-value">开发中</p>
              </i-col>
              <i-col span="12">
                <p class="meta-extra-label">总额</p>
                <p class="meta-extra-value">¥498.00</p>
              </i-col>
            </Row>
          </div>
        </div>
      </div>
    </header>
    <divider-line :height="divider.height" :bgColor="divider.bgColor" />
  </div>
</template>

<script>
import DividerLine from '../../../components/DividerComponents/Divider';
export default {
  name: 'VueErekAdvanceProfile',
  components: {
    DividerLine
  },
  data() {
    return {
      divider: {
        height: '20px',
        bgColor: '#f5f7f9'
      }
    };
  },
  methods: {
    handleActionOne() {
      this.$tool.toastTips('warning', `点击操作1`, 1.5);
    },
    handleActionTwo() {
      this.$tool.toastTips('info', `点击操作2`, 1.5);
    },
    handleActionThree() {
      this.$tool.toastTips('success', '主操作成功', 1.5);
    }
  }
};
</script>

<style lang="scss" scoped>
.vue-erek-profile-container {
  width: 100%;
  height: 100%;
  background-color: #fff;

  .vue-erek-meta-header {
    padding: 30px 40px;
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

  .vue-erek-meta-extraContent {
    text-align: right;
  }

  .vue-erek-meta-content {
    width: 60%;
    padding-left: 10px;
    line-height: 32px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.55);

    p.meta-desc {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .vue-erek-meta-extraContent {
    padding-top: 6px;
    line-height: 36px;
    margin-left: 10px;
    text-align: right;

    .meta-extra-label {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.45);
    }

    .meta-extra-value {
      font-size: 22px;
      color: rgba(0, 0, 0, 0.8);
    }
  }
}
</style>
