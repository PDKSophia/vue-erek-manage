<template>
  <div class="erek-wrapper-box">
    <canvas-animate />
    <div class="erek-admin-login">
      <h1>Vue Erek Manage</h1>
      <div class="erek-form-login">
        <Form ref="erekUser" :model="erekUser" :rules="ruleInline">
          <FormItem prop="user">
            <Input type="text" v-model="erekUser.user" placeholder="">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="erekUser.password" placeholder="">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="email">
            <Input type="email" v-model="erekUser.email" placeholder="">
              <Icon type="ios-mail" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="code">
            <Input type="text" v-model="erekUser.code" style='width: 60%' placeholder="">
              <Icon type="ios-barcode" slot="prepend"/>
            </Input>
            <Button type="info" style='marginLeft: 5%; width: 35%' v-show='sendCode' @click='handleSendCode'>获取验证码</Button>
            <Button type="info" style='marginLeft: 5%; width: 35%' v-show='!sendCode' class='btn-disabled'>{{ countTime }}s 后重试</Button>
          </FormItem>
          <FormItem>
            <Button type="info" style='width: 100%' @click="handleSubmit('erekUser')">登陆</Button>
          </FormItem>
      </Form>
      </div>
    </div>
  </div>
</template>

<script>
import CanvasAnimate from '../../erekPages/Canvas/Index'
import { setAuthorityToken } from '../../utils/vue-token'

export default {
  name: 'ErekLogin',
  components: {
    CanvasAnimate
  },
   methods: {
    // 倒计时60s
    setCountDownTime () {
      this.sendCode = false
      this.countTime = 10
      var timer = setInterval(() => {
        this.countTime--
        if (this.countTime <= 0) {
          this.sendCode = true
          clearInterval(timer)
        }
      }, 1000)
    },
    // 获取验证码
    handleSendCode () {
      if(this.$utils.checkEmail(this.erekUser.email)) {
        this.setCountDownTime()
        this.$api.fetchValidateCode(this.erekUser.email).then((res) => {
          sessionStorage.setItem('code', res.code)
        })
      } else{
        this.$tool.toastTips('warning', '请输入正确邮箱', 1.5)
      }
    },
    // 表单提交
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          if (!(this.$utils.checkEmail(this.erekUser.email))) {
            this.$tool.toastTips('warning', '请输入正确邮箱', 1.5)
          } else {
            this.$api.fetchOauthAdminLogin(JSON.stringify(this.erekUser)).then(res => {
              setAuthorityToken(res.token)
              setTimeout(() => {
                this.$router.push({
                  path: '/erek-manage'
                })
              }, 1500)
            })
          }
        } else {
          this.$tool.toastTips('error', '登陆失败', 1.5)
        }
      })
    }
  },
  data () {
    return {
      sendCode: true,
      countTime: 0,
      erekUser: {
        user: '',
        password: '',
        email: '',
        code: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码.', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不能少于6位数', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ],
      }
    }
  },
  mounted() {
  },
}
</script>

<style scoped lang='scss'>
.erek-wrapper-box {
  width: 100%;
  height: 100%;
  position: relative;
}
.erek-admin-login {
  width: 20rem;
  height: 23rem;
  position: absolute;
  background: rgba(36, 36, 36, .3);
  z-index: 2018;
  right: 5%;
  top: 25%;
  text-align: center;
  padding-top: 1rem;

  > .erek-form-login {
    padding: 1rem 10%;
  }

}
.btn-disabled {
  background-color: #ccc;
  color: #232323;
  border: 1px solid #232323;
}
.btn-disabled:hover {
  background-color: #ccc;
  color: #232323;
  border: 1px solid #232323;
}
</style>
