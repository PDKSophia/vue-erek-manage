export default {
  /**
   * desc: 加载框
   * @param {String} text
   * @param {Boolean} lock
   * @param {Number} delay
   * @param {String} customClass
   */
  loadingTips: (content = 'Loading', duration = 0, continueDelay = 1500) => {
    const msg = Message.loading({
      content: content,
      duration: duration
    });
    setTimeout(msg, continueDelay);
  },
  /**
   * desc: 提示框
   * @param {String} type, info / success / warning / error
   * @param {Number} delay
   * @param {String} content
   */
  toastTips: (type = 'info', content, delay = 1.5) => {
    switch (type) {
      case 'info':
        Message.info({ content: content, duration: delay });
        break;
      case 'success':
        Message.success({ content: content, duration: delay });
        break;
      case 'warning':
        Message.warning({ content: content, duration: delay });
        break;
      default:
        Message.error({ content: content, duration: delay });
        break;
    }
  }
};
