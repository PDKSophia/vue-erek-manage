// import { Message } from 'iview'

export default {
  /**
   * desc: 邮箱验证
   * @param {String} text
  */
  checkEmail: (email) => {
    var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/
    if (reg.test(email)) {
        return true
    } else {
        return false
    }
  }
}