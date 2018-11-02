export function getAuthorityToken () {
  return sessionStorage.getItem('vue-erek-token')
}

export function setAuthorityToken (vueToken) {
  return sessionStorage.setItem('vue-erek-token', vueToken)
}