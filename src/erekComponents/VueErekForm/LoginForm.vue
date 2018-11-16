<template>
  <div>
    <Modal
      :width="width"
      v-model="visibled"
      :closable="closable"
      :mask-closable="maskClosable"
      title="管理员登陆"
      >
        <Form ref="loginform" :model="loginform" :rules="ruleValidate" :label-width="80">
          <FormItem label="用户名" prop="username">
            <Input type="text" v-model="loginform.username" placeholder="Enter your username"></Input>
          </FormItem>
          <FormItem  label="密码" prop="password">
            <Input type="password" v-model="loginform.password" placeholder="Enter your password"></Input>
          </FormItem>
          <FormItem label="邮箱" prop="email">
            <Input type="email" v-model="loginform.email" placeholder="Enter your email"></Input>
          </FormItem>
          <FormItem label="验证码" prop="email">
            <Row>
              <Col span="15">
                <FormItem prop="code">
                  <Input type="text" v-model="loginform.code" placeholder="Enter your code"></Input>
                </FormItem>
              </Col>
              <Col span="8" offset='1'>
                <Button type='primary' size='small' v-show='sendCode' @click='handleSendCode'>获取验证码</Button>
                <button type="default" size='small' v-show='!sendCode' class='btn-disabled' disabled>{{ countTime }}s 后重试</button>
              </Col>
            </Row>
          </FormItem>
        </Form>
        <div slot='footer'>
          <Button type='default' size='small' @click='onHandleClickCancle("loginform")'>取消</Button>
          <Button type='primary' size='small' @click='onHandleClickSubmit("loginform")'>登陆</Button>
        </div>
    </Modal>
  </div>
</template>

<script>
import { setEmailCode } from '../../utils/vue-token'

export default {
  name: 'PersonForm',
  data () {
    return {
      visibled: false,
      closable: false, // 是否显示右上角的关闭按钮，关闭后 Esc 按键也将关闭
      maskClosable: false, // 是否允许点击遮罩层关闭	
      sendCode: true,
      countTime: 0, // 倒计时60s
      loginform: {
        username: 'Admin',
        password: 'Admin',
        email: '1063137960@qq.com',
        code: '',
      },
      ruleValidate: {
        username: [
          { required: true, message: '请输入管理员姓名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入管理员密码', trigger: 'blur' },
        ],
        email: [
          { type: 'email', required: true, message: '请输入管理员邮箱', trigger: 'blur' },
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
        ],
      }
    }
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
      if (this.$utils.checkEmail(this.loginform.email)) {
        this.setCountDownTime()
        this.$api.fetchValidateCode(this.loginform.email).then((res) => {
          this.$Notice.open({
            title: `您的验证码是 : ${res.code}`
          });
          setEmailCode(res.code)
        })
      } else {
        this.$tool.toastTips('warning', '请输入正确邮箱', 1.5)
      }
    },
    onHandleClickSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('onCallbackForm', this.loginform)
        } else {
          console.log('error')
        }
      })
    },
    onHandleClickCancle (formName) {
      this.$refs[formName].resetFields()
      this.$emit('onCallbackForm', this.loginform)
    }
  },
  props: {
    loginVisible: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '50%'
    },
  },
  watch: {
    loginVisible() {
      this.$nextTick(() => {
        this.visibled = this.loginVisible
      })
    }
  },
  mounted() {
    
  },
}
</script>

<style scoped lang='scss'>
.btn-disabled {
  padding: 0 7px;
  font-size: 10px;
  border-radius: 3px;
  background-color: #f1f1f1;
  color: #838383;
  height: 33px;
}
</style>
