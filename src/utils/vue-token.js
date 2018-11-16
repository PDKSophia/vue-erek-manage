export function getAuthorityToken () {
  return sessionStorage.getItem('vue-erek-token')
}

export function setAuthorityToken (vueToken) {
  return sessionStorage.setItem('vue-erek-token', vueToken)
}

export function getEmailCode () {
  return sessionStorage.getItem('vue-erek-code')
}

export function setEmailCode (code) {
  return sessionStorage.setItem('vue-erek-code', code)
}