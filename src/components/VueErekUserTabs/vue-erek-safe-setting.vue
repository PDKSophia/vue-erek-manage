<template>
  <div class="vue-safe-tabs-container">
    <Row :gutter="16">
      <i-col span="13">
        <div class="vue-safe-cell-item">
          <h4>账户密码</h4>
          <p class="item-meta-content">
            当前密码强度 ：强 <span class="item-float-action">修改</span>
          </p>
        </div>
        <Divider dashed />
        <div class="vue-safe-cell-item">
          <h4>密保手机</h4>
          <p class="item-meta-content">
            已绑定手机 ：189****8869 <span class="item-float-action">修改</span>
          </p>
        </div>
        <Divider dashed />
        <div class="vue-safe-cell-item">
          <h4>密保问题</h4>
          <p class="item-meta-content">
            未设置密保问题，密保问题可有效保护账户安全
            <span class="item-float-action">设置</span>
          </p>
        </div>
        <Divider dashed />
        <div class="vue-safe-cell-item">
          <h4>修改邮箱</h4>
          <p class="item-meta-content">
            已绑定邮箱 ：1063137960@qq.com
            <span class="item-float-action">修改</span>
          </p>
        </div>
        <Divider dashed />
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'VueErekSafeTabs'
};
</script>

<style scoped lang="scss">
.vue-safe-tabs-container {
  width: 100%;
  margin-top: 10px;
}
.vue-safe-cell-item {
  padding: 0px 0px 20px 14px;
}
h4 {
  color: rgba(0, 0, 0, 0.65);
  margin-bottom: 4px;
  font-size: 15px;
  line-height: 30px;
}
.item-meta-content {
  color: rgba(0, 0, 0, 0.45);
  font-size: 15px;
}
.item-float-action {
  float: right;
  color: #3797e0;
}
.item-float-action:hover {
  cursor: pointer;
}
</style>
