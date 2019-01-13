<template>
  <div class="vue-tabs-container">
    <Row :gutter="16">
      <i-col span="13">
        <div class="vue-item-extra-cell-item">
          <h4>微信绑定</h4>
          <div class="item_pager_1_container">
            <div class="item_pager_2_content">当前未微信绑定账号</div>
            <div class="item_pager_3_action">
              <div class="item_pager_3_action">
                <span class="action_text normal">绑定</span>
              </div>
            </div>
          </div>
        </div>
        <Divider dashed />
        <div class="vue-item-extra-cell-item">
          <h4>支付宝绑定</h4>
          <div class="item_pager_1_container">
            <div class="item_pager_2_content">当前未绑定支付宝账号</div>
            <div class="item_pager_3_action">
              <div class="item_pager_3_action">
                <span class="action_text normal">绑定</span>
              </div>
            </div>
          </div>
        </div>
        <Divider dashed />
        <div class="vue-item-extra-cell-item">
          <h4>腾讯QQ绑定</h4>
          <div class="item_pager_1_container">
            <div class="item_pager_2_content">当前未绑定腾讯QQ账号</div>
            <div class="item_pager_3_action">
              <div class="item_pager_3_action">
                <span class="action_text normal">绑定</span>
              </div>
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
  name: 'UserAccountSetting',
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
