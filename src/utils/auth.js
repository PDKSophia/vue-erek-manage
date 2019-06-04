/**
 * authority
 *
 * @summary
 * @author PDK
 *
 * Created at     : 2018-11-27
 * Last modified  : 2019-05-25
 */
/**
 * @获取token
 */
export function getAuthorityToken() {
  return sessionStorage.getItem('vue-erek-token')
}
/**
 * @设置token
 */
export function setAuthorityToken(vueToken) {
  return sessionStorage.setItem('vue-erek-token', vueToken)
}
/**
 * @获取用户角色权限
 */
export function getAuthorityRole() {
  return sessionStorage.getItem('vue-erek-role')
}
/**
 * @设置用户角色权限
 */
export function setAuthorityRole(role) {
  return sessionStorage.setItem('vue-erek-role', role)
}
/**
 * @获取验证码
 */
export function getEmailCode() {
  return sessionStorage.getItem('vue-erek-code')
}
/**
 * @设置验证码
 */
export function setEmailCode(code) {
  return sessionStorage.setItem('vue-erek-code', code)
}
