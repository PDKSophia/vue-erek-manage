<template>
  <div class="vue-tabs-container">
    <Row :gutter="16">
      <i-col span="13">
        <div class="vue-item-extra-cell-item">
          <h4>账户密码</h4>
          <div class="item_pager_1_container">
            <div class="item_pager_2_content"
              >其他用户的消息将以站内信的形式通知</div
            >
            <div class="item_pager_3_action">
              <i-switch
                v-model="accountSwitch"
                @on-change="handleAccountSwitch"
              >
                <span slot="open">开</span> <span slot="close">关</span>
              </i-switch>
            </div>
          </div>
        </div>
        <Divider dashed />
        <div class="vue-item-extra-cell-item">
          <h4>系统消息</h4>
          <div class="item_pager_1_container">
            <div class="item_pager_2_content">系统消息将以站内信的形式通知</div>
            <div class="item_pager_3_action">
              <i-switch v-model="systemSwitch" @on-change="handleAccountSwitch">
                <span slot="open">开</span> <span slot="close">关</span>
              </i-switch>
            </div>
          </div>
        </div>
        <Divider dashed />
        <div class="vue-item-extra-cell-item">
          <h4>待办任务</h4>
          <div class="item_pager_1_container">
            <div class="item_pager_2_content">待办任务将以站内信的形式通知</div>
            <div class="item_pager_3_action">
              <i-switch v-model="taskSwitch" @on-change="handleAccountSwitch">
                <span slot="open">开</span> <span slot="close">关</span>
              </i-switch>
            </div>
          </div>
        </div>
        <Divider dashed />
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'UserNoticeSetting',
  data() {
    return {
      accountSwitch: true,
      systemSwitch: false,
      taskSwitch: false
    };
  },
  methods: {
    handleAccountSwitch(status) {
      console.log('这个值: ', status);
    }
  }
};
</script>

<style scoped lang="scss">
.vue-tabs-container {
  width: 100%;
  margin-top: 10px;
}
.vue-item-extra-cell-item {
  padding: 0px 0px 20px 14px;

  .item_pager_1_container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    > .item_pager_2_content {
      width: 80%;
      display: flex;
      justify-content: flex-start;
      color: rgba(0, 0, 0, 0.45);
      font-size: 15px;
    }
    > .item_pager_3_action {
      width: 20%;
      display: flex;
      justify-content: flex-end;
    }
  }
}
h4 {
  color: rgba(0, 0, 0, 0.65);
  margin-bottom: 4px;
  font-size: 15px;
  line-height: 30px;
}
.action_text {
  font-size: 15px;
  line-height: 22px;
  cursor: pointer;
}
// 正常
.normal {
  color: #1890ff;
}
// 密码强度: 强
.strong {
  color: #52c41a;
}
// 密码强度: 中
.middle {
  color: #dfb253;
}
// 密码强度: 弱
.bad {
  color: #ec657b;
}
</style>
