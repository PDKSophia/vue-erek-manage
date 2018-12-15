<template>
  <div class="vue-erek-person-setting-container">
    <Tabs size='small'>
        <TabPane label="基本设置">
          <erek-base-setting></erek-base-setting>
        </TabPane>
        <TabPane label="安全设置">
          <erek-safe-setting></erek-safe-setting>
          </TabPane>
        <TabPane label="账号绑定">
          <erek-account-setting></erek-account-setting>
          </TabPane>
        <TabPane label="新消息通知">
          <erek-message-notice></erek-message-notice>
        </TabPane>
    </Tabs>
  </div>
</template>

<script>
import ErekBaseSetting from '../../../components/VueErekUserTabs/vue-erek-base-setting.vue'
import ErekSafeSetting from '../../../components/VueErekUserTabs/vue-erek-safe-setting.vue'
import ErekAccountSetting from '../../../components/VueErekUserTabs/vue-erek-account-setting.vue'
import ErekMessageNotice from '../../../components/VueErekUserTabs/vue-erek-message-notice.vue'
export default {
  name: 'ErekPersonSetting',
  components: {
    ErekBaseSetting,
    ErekSafeSetting,
    ErekAccountSetting,
    ErekMessageNotice
  }
}
</script>

<style scoped lang='scss'>
.vue-erek-person-setting-container {
  padding: 16px 22px;
}
</style>
