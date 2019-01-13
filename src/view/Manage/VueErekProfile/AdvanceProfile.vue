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
                <p>仓库编号 : VErek-2018-1031</p> <p>创建人 : 彭道宽</p>
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
    <div class="erek-progress-step-container">
      <h3 class="erek-progress-title">流程进度</h3>
      <div class="erek-progress-step">
        <Steps :current="2">
          <Step
            title="已上传"
            icon="ios-cloud-upload-outline"
            content="这里是该步骤的描述信息"
          ></Step>
          <Step
            title="待审核"
            icon="ios-funnel-outline"
            content="这里是该步骤的描述信息"
          ></Step>
          <Step
            title="审核中"
            icon="ios-disc-outline"
            content="这里是该步骤的描述信息"
          ></Step>
          <Step
            title="完成"
            icon="ios-checkmark-circle-outline"
            content="这里是该步骤的描述信息"
          ></Step>
        </Steps>
      </div>
    </div>
    <divider-line :height="divider.height" :bgColor="divider.bgColor" />
    <div class="erek-standard-container">
      <h3 class="erek-standard-title">标准替代</h3>
      <div class="erek-standard-step">
        <Row :gutter="16">
          <i-col span="8">
            <Card>
              <p slot="title">替代了如下标准</p>
              <p>EREK-2481-IDO JavaScript高级程序设计 第3版</p>
              <p>EREK DX-12-2981 数据结构与算法 JavaScript描述</p>
              <p>IYAD 2981-SEX-1 程序员修炼之道——从小工到专家</p>
            </Card>
          </i-col>
          <i-col span="8">
            <Card>
              <p slot="title">被替代标准</p>
              <p>ISO 2859-5-4i72JavaScript设计模式与开发实践</p>
              <p>IYAD 2981-SEX-1 程序员修炼之道——从小工到专家</p>
              <p>EREK 0917-PYQ-261 大型网站技术架构</p>
            </Card>
          </i-col>
          <i-col span="8">
            <Card>
              <p slot="title">同等标准</p>
              <p>EREK-X872-12 编程之法-面试和算法心得</p>
              <p>JavaScript REG-181-YAPQ 正则表达式</p>
              <p>TQVS 1KQ-182 计算机是怎样跑起来的</p>
            </Card>
          </i-col>
        </Row>
      </div>
    </div>
    <divider-line :height="divider.height" :bgColor="divider.bgColor" />
    <div class="erek-tabs-container">
      <Tabs value="tabOne">
        <TabPane label="操作日志一" name="tabOne">
          <erek-table
            :border="tableConfig.border"
            :stripe="tableConfig.stripe"
            :size="tableConfig.size"
            :data="tableConfig.data"
            :pagination="tableConfig.pagination"
          />
        </TabPane>
        <TabPane label="操作日志二" name="tabTwo">标签二的内容</TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import DividerLine from '../../../components/DividerComponents/Divider';
import ErekTable from '../../../components/ProfileTableComponents/AdvanceTable.vue';
export default {
  name: 'VueErekAdvanceProfile',
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
  },
  mounted() {
    // 发送请求获取数据信息
    this.$api.list.fetchRequestTableApi().then(res => {
      this.tableConfig.data = res.list.splice(0, 4);
      this.tableConfig.size = 'default';
      this.tableConfig.pagination = {
        hasPage: false,
        pageNum: res.current,
        pageSize: res.size,
        total: res.total
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
// 流程进度
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
// 标准替代
.erek-standard-container {
  width: 100%;
  background-color: #fff;
  > .erek-standard-title {
    padding: 12px 30px;
    border-bottom: 1px solid #f1f1f1;
    color: rgba(0, 0, 0, 0.82);
    font-size: 1rem;
  }
  > .erek-standard-step {
    padding: 20px 26px;
    line-height: 30px;
  }
}
// 操作日志
.erek-tabs-container {
  width: 100%;
  background-color: #fff;
  padding: 12px 30px 40px;
}
</style>
