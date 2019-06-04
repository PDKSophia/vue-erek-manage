<template>
  <div class="erek-login-container">
    <div class="login-form-container">
      <div class="login-in-paper">
        <div class="login-avatar-paper">
          <Icon type="md-lock"/>
        </div>
        <h1 class="login-title">Vue-Erek-Manage</h1>
        <Form class="loginform-container" ref="loginform" :model="loginform" :rules="ruleValidate">
          <FormItem class="form-item-container" prop="username">
            <Input type="text" v-model="loginform.username" placeholder="用户名"/>
          </FormItem>
          <FormItem class="form-item-container" prop="password">
            <Input type="password" v-model="loginform.password" placeholder="密码"/>
          </FormItem>
          <FormItem class="form-item-container" prop="email">
            <Input type="email" v-model="loginform.email" placeholder="邮箱"/>
          </FormItem>
          <FormItem>
            <Row>
              <i-col span="15">
                <FormItem prop="code">
                  <Input type="text" v-model="loginform.code" placeholder="验证码"/>
                </FormItem>
              </i-col>
              <i-col span="8" offset="1">
                <Button
                  class="login-button"
                  type="primary"
                  size="small"
                  v-show="sendCode"
                  @click="handleSendCode"
                >获取验证码</Button>
                <Button
                  type="default"
                  size="small"
                  v-show="!sendCode"
                  class="login-button btn-disabled"
                  disabled
                >{{ countTime }}s 后重试</Button>
              </i-col>
            </Row>
          </FormItem>

          <Button
            type="primary"
            icon="ios-log-in"
            class="login-button"
            @click="onHandleClickSubmit('loginform')"
          >登陆</Button>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  setEmailCode,
  getEmailCode,
  setAuthorityToken,
  setAuthorityRole
} from 'utils/auth';

export default {
  name: 'ErekManageLogin',
  data() {
    return {
      sendCode: true,
      countTime: 0, // 倒计时60s
      loginform: {
        username: 'Admin',
        password: 'Admin',
        email: '1063137960@qq.com',
        code: ''
      },
      ruleValidate: {
        username: [
          { required: true, message: '请输入管理员姓名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入管理员密码', trigger: 'blur' }
        ],
        email: [
          {
            type: 'email',
            required: true,
            message: '请输入管理员邮箱',
            trigger: 'blur'
          }
        ],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
      }
    };
  },
  methods: {
    // 倒计时60s
    setCountDownTime() {
      this.sendCode = false;
      this.countTime = 10;
      var timer = setInterval(() => {
        this.countTime--;
        if (this.countTime <= 0) {
          this.sendCode = true;
          clearInterval(timer);
        }
      }, 1000);
    },
    // 获取验证码
    async handleSendCode() {
      if (this.$utils.checkEmail(this.loginform.email)) {
        this.setCountDownTime()
        // dispatch 发送请求
        await this.$store.dispatch('user/retrieveEmailCodeAsync', this.loginform.email)
      } else {
        this.$utils.toastTips('warning', '请输入正确邮箱', 1.5);
      }
    },
    // 表单校验登陆
    async onHandleClickSubmit(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          if (getEmailCode() != this.loginform.code) {
            this.$utils.toastTips('error', '验证码错误', 1.5);
          } else {
            await this.$store.dispatch('user/oauthLoginAsync', this.loginform)
            setTimeout(() => {
              this.$router.push({
                path: '/erek-manage'
              });
            }, 1500)
          }
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.erek-login-container {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #fafafa;
  text-align: center;

  .login-form-container {
    display: flex;
    align-items: center;
    text-align: center;
    margin-left: auto;
    width: 400px;
    margin-right: auto;

    .login-in-paper {
      border-radius: 3px;
      width: 400px;
      display: flex;
      padding: 16px 24px 24px;
      margin-top: 128px;
      align-items: center;
      flex-direction: column;
      background-color: white;
      box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 3px 1px -2px rgba(0, 0, 0, 0.12);

      .login-avatar-paper {
        background-color: #3f51b5;
        margin: 8px;
        width: 40px;
        height: 40px;
        display: flex;
        position: relative;
        overflow: hidden;
        font-size: 1.25rem;
        align-items: center;
        flex-shrink: 0;
        color: white;
        font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
        user-select: none;
        border-radius: 50%;
        justify-content: center;
      }

      .login-title {
        color: rgba(0, 0, 0, 0.87);
        font-size: 1rem;
        font-weight: 400;
        font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
        line-height: 1.5em;
      }
    }
  }
}

// 表单
.loginform-container {
  width: 90%;
  margin-top: 12px;
  margin-left: auto;
  margin-right: auto;

  .form-item-container {
    margin-bottom: 24px !important;
    margin-top: 12px !important;
    width: 100% !important;
  }
}
.login-button {
  width: 100%;
  background-color: #3f51b5;
  height: 32px;
  border: 1px solid #3f51b5;
}
</style>
