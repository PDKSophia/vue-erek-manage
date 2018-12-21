<template>
  <div class="vue-base-tabs-container" v-if='!initDataLoading'>
    <Row :gutter='16'>
      <Col span='13'>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <FormItem label="昵称" prop="username">
            <Input v-model="formValidate.username" placeholder="修改的名字" />
          </FormItem>
          <FormItem label="邮箱" prop="email">
            <Input v-model="formValidate.email" placeholder="邮箱..." />
          </FormItem>
          <FormItem label="国家" prop="city">
              <Select v-model="formValidate.city" placeholder="选择国家">
                  <Option value="China">中国</Option>
              </Select>
          </FormItem>
          <FormItem label="性别" prop="gender">
              <RadioGroup v-model="formValidate.gender">
                  <Radio label="male">钢铁直男</Radio>
                  <Radio label="female">小家碧玉</Radio>
              </RadioGroup>
          </FormItem>
          <FormItem label="爱好" prop="tag">
              <CheckboxGroup v-model="formValidate.tag">
                  <Checkbox label="Vue-Erek-Manage 开发者"></Checkbox>
                  <Checkbox label="前端工程师"></Checkbox>
                  <Checkbox label="平台维护者"></Checkbox>
                  <Checkbox label="平台设计师"></Checkbox>
              </CheckboxGroup>
          </FormItem>
          <FormItem label="街道地址" prop="address">
            <Input v-model="formValidate.address" placeholder="地址..." />
          </FormItem>
          <FormItem label="个人简介" prop="desc">
              <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 5,maxRows: 10}" placeholder="个人简介..." />
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
          </FormItem>
        </Form>
      </Col>
      <Col span='8'>
        <div class="vue-user-avatar-large">
          <img :src="formValidate.avatar" alt="" class="avatar" />
          <a class='erek-button-avatar-upload' href='javascript:;'>
            + 个人头像
            <input class='erek-button-avatar-input' type='file' name='avatar' id='avatar' @change='handleChangeAvatar' />
          </a>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'VueErekBaseTabs',
  computed: mapState({
    erekUser: state => state.user.erekUser
  }),
  data () {
    return {
      formValidate: {
        username: '',
        email: '',
        city: '',
        gender: '',
        tag: [],
        address: '',
        desc: ''
      },
      initDataLoading: true,
      ruleValidate: {
        username: [
          { required: true, message: '名字不能为空', tigger: 'blur' }
        ],
        email: [
          { required: true, message: '邮箱不能为空', tigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', tigger: 'blur' }
        ],
        city: [
          { required: true, message: '城市不能为空', tigger: 'chnage' }
        ],
        gender: [
          { required: true, message: '性别不能为空', tigger: 'chnage' }
        ],
        tag: [
          { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
          { type: 'array', max: 3, message: '最多只能选择3个', trigger: 'change' }
        ],
        address: [
          { required: true, message: '地址不能为空', tigger: 'blur' }
        ],
        desc: [
          { required: true, message: '请输入个人简介', trigger: 'blur' },
          { type: 'string', min: 10, message: '不能少于10个字符串', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapActions([
      'setErekUser'
    ]),
    // 修改头像
    handleChangeAvatar () {
      var box = document.getElementById('avatar')
      var headimg = box.files
      var imgName = headimg[0].name
      var imgSize = headimg[0].size
      var imgType = imgName.substring(imgName.lastIndexOf('.') + 1).toLowerCase()
      if (imgType !== 'jpg' && imgType !== 'jpeg' && imgType !== 'png') {
        this.$tool.toastTips('warning', '照片只支持jpg、jpeg、png格式', 1.5)
        imgName = ''
        headimg = null
        return false
      }
      if (imgSize > 5242000) {
        this.$tool.toastTips('warning', '大小不能超过5M', 1.5)
        imgName = ''
        headimg = null
        return false
      } else {
        this.formValidate.avatar = window.URL.createObjectURL(headimg[0])
      }
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$tool.toastTips('success', '修改成功!', 1.5);
          this.setErekUser(this.formValidate)
        } else {
          this.$tool.toastTips('error', 'Fail!', 1.5);
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields();
    }
  },
  mounted() {
    if (this.initDataLoading) {
      this.$tool.loadingTips('loading', 0, 2000)
      this.formValidate = {...this.erekUser}
      setTimeout(() => {
        this.initDataLoading = false
      }, 1500)
    }
  },
}
</script>

<style scoped lang='scss'>
.vue-base-tabs-container {
  width: 100%;
  padding-top: 16px;
}
.vue-user-avatar-large {
  text-align: center;
  width: 100px;
  height: 100px;
  margin-left: 30%;

  > img.avatar {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  > a.erek-button-avatar-upload {
    display: inline-block;
    position: relative;
    overflow: hidden;
    text-align: center;
    width: 100px;
    background-color: white;
    border: solid 1px #d9d9d9;
    border-radius: 4px;
    padding: 5px 10px;
    font-size: 12px;
    font-weight: normal;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.65);
    text-decoration: none;
    margin-top: 10px;

    > .erek-button-avatar-input {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 14px;
      background-color: #fff;
      transform: translate(-300px, 0px) scale(4);
      height: 40px;
      opacity: 0;
      filter: alpha(opacity=0);
    }
  }
}
</style>
