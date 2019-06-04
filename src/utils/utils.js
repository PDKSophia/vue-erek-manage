/**
 * utils
 *
 * @summary
 * @author PDK
 *
 * Created at     : 2018-11-27
 * Last modified  : 2019-05-26
 */
import { Message, Notice } from 'iview'
export const baseCDNUrl = 'https://cdn.pengdaokuan.cn/' // CDN URL前缀
export const baseUrl =
  process.env.NODE_ENV === 'production' ? 'https://www.pengdaokuan.cn/' : '/api' // 接口URL前缀

/**
 * desc: 加载框
 * @param {String} text
 * @param {Boolean} lock
 * @param {Number} delay
 * @param {String} customClass
 */
function loadingTips(content = 'Loading', duration = 0, continueDelay = 1500) {
  const msg = Message.loading({
    content: content,
    duration: duration
  })
  setTimeout(msg, continueDelay)
}

/**
 * desc: 提示框
 * @param {String} type, info / success / warning / error
 * @param {Number} delay
 * @param {String} content
 */
function toastTips(type = 'info', content, delay = 1.5) {
  switch (type) {
    case 'info':
      Message.info({ content: content, duration: delay })
      break
    case 'success':
      Message.success({ content: content, duration: delay })
      break
    case 'warning':
      Message.warning({ content: content, duration: delay })
      break
    default:
      Message.error({ content: content, duration: delay })
      break
  }
}

/**
 * 时间戳变成类似2018-01-12这样的字符串
 * @param {Number} num 时间戳整数
 */
function intToDateString(num) {
  if (num) {
    const date = new Date(num)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${year}-${month >= 10 ? month : '0' + month}-${day >= 10 ? day : '0' + day}`
  } else {
    return ''
  }
}

/**
 * 判断一个字符串是否是Url
 * @param {String} str
 */
const isUrl = str => {
  const pattern = /^(https?|tmp):\/\//
  return pattern.test(str)
}

/**
 * 处理URL的方法
 * @param {String} url
 * @param {String} type api: 前缀为接口; cdn: 前缀为CDN(默认值)
 */
export const handleUrl = (url, type = 'cdn') => {
  if (isUrl(url)) return url
  if (!url) return ''
  switch (type) {
    case 'api':
      return baseUrl + url
    case 'cdn':
      return baseCDNUrl + url
    default:
      return url
  }
}
/**
 * 显示提示成功的弹窗
 * @param {Type} type Message/Notice
 * @param {Success} success
 * @param {content} title
 */
export const showSuccessTips = async (type, title, duration = 1.5) => {
  if (type === 'message') {
    Message.success({
      content: title,
      duration
    })
  } else {
    Notice.success({
      title,
      duration
    })
  }
}
/**
 * 显示提示错误的对话框，并且允许用户操作
 * @param {Error} error
 * @param {Function} callback
 */
export const showErrorModal = async (error, callback) => {
  const { code, message } = error
  await Message.error({ content: `${code}-${message}`, duration: 1500 })
  if (typeof callback === 'function') {
    callback()
  }
}

/**
 * @邮箱验证
 * @param {String} text
 * @return {Boolean}
 */
function checkEmail(email) {
  var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/
  if (reg.test(email)) {
    return true
  } else {
    return false
  }
}
/**
 * @随机生成颜色
 * @return {String}
 */
function randomColor() {
  var colorAngle = Math.floor(Math.random() * 360)
  return `hsla(${colorAngle}, 100%, 50%, .4)`
}
/**
 * @从制定的颜色中返回
 * @return {String}
 */
function getColorFromArray() {
  var colorArray = [
    '#34c7da',
    '#96d2ed',
    '#3498d9',
    '#f3ad40',
    '#1abc9b',
    '#39435f',
    '#34b8d9',
    '#b07a4b',
    '#b07a4b',
    '#5bb389'
  ]
  var index = Math.floor(Math.random() * (colorArray.length - 1))
  return colorArray[index]
}
/**
 * @数组去重
 * @param {Array} array
 * @return {String}
 */
function uniqueArray(arr) {
  let newArray = []
  let obj = {}

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = true
      newArray.push(arr[i])
    }
  }
  return newArray
}
/**
 * @解析路由参数
 */
function checkUrlQuery(url) {
  console.log(url)
}

export default {
  loadingTips,
  toastTips,
  intToDateString,
  checkEmail,
  randomColor,
  getColorFromArray,
  uniqueArray,
  checkUrlQuery
}
