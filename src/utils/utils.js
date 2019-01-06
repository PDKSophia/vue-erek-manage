// import { Message } from 'iview'

export default {
  /**
   * desc: 邮箱验证
   * @param {String} text
   * @return {Boolean}
   */
  checkEmail: email => {
    var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
    if (reg.test(email)) {
      return true;
    } else {
      return false;
    }
  },
  /**
   * desc: 随机生成颜色
   * @return {String}
   */
  randomColor: () => {
    var colorAngle = Math.floor(Math.random() * 360);
    return `hsla(${colorAngle}, 100%, 50%, .4)`;
  },
  /**
   * desc: 从制定的颜色中返回
   * @return {String}
   */
  getColorFromArray: () => {
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
    ];
    var index = Math.floor(Math.random() * (colorArray.length - 1));
    return colorArray[index];
  },
  /**
   * desc: 数组去重
   * @param {Array} array
   * @return {String}
   */
  uniqueArray: arr => {
    let newArray = [];
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
      if (!obj[arr[i]]) {
        obj[arr[i]] = true;
        newArray.push(arr[i]);
      }
    }
    return newArray;
  }
};
