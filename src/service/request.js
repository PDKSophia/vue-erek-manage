/**
 * 全局封装的 request 请求
 *
 * @summary 
 * @author PDK
 *
 * Created at     : 2019-01-11
 * Last modified  : 2019-05-26
 */
import axios from 'axios'
import { handleUrl } from 'utils/utils'
import { getAuthorityToken } from 'utils/auth'

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}

/**
 * 检查http错误
 * 符合条件，返回response.data
 * @param {Object} response
 * @return {Object} response.data
 */
const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response.data
  }
  const errortext = codeMessage[response.status] || response.statusText
  // 弹窗通知报错
  const error = new Error(errortext)
  error.name = response.status
  error.response = response
  throw error
}

/**
 * 检查自定义的错误
 * @param {Object} data
 */
function checkCode(data) {
  if (data.code === 1) {
    return data
  } else {
    const err = new Error(data.msg)
    err.response = data
    err.code = data.code
    throw err
  }
}

/**
 * 发出请求，返回一个Promise
 * 错误有两种：http错误以及code不为0的错误，两种都会抛出错误
 * @param {Object} options
 * @param {Function} method 1: axios(默认)
 * @param {Boolean} authorizing 是否需要携带token
 */
export default function request(options, method = axios, authorizing = true) {
  let { url, headers } = options
  url = handleUrl(url, 'api')
  if (authorizing) {
    const authToken = getAuthorityToken()
    headers = {
      ...headers,
      xauthtoken: authToken
    }
  }
  return method({
    ...options,
    url,
    headers
  })
    .then(checkStatus)
    .then(checkCode)
    .then(res => {
      /**
       * 如果返回的不是一个JSON对象，而是一个字符串，因此需要对这个字符串进行处理
       * 如果直接返回的是一个JSON对象，这个时候，JSON.parse会抛出异常，如果出现异常
       * 我们直接返回这个对象本身的值即可
       */
      try {
        return JSON.parse(res.data)
      } catch (err) {
        return res.data
      }
    })
}
