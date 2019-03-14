/**
 * desc: 加载框
 * @param {String} text
 * @param {Boolean} lock
 * @param {Number} delay
 * @param {String} customClass
 */
export function loadingTips(content = 'Loading', duration = 0, continueDelay = 1500) {
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
export function toastTips(type = 'info', content, delay = 1.5) {
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
export function intToDateString(num) {
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
