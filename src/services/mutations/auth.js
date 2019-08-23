export function authLogin(state, payload) {
  return new Promise((res, rej) => {
    if (!payload) {
      rej('Invalid payload!')
    }
    state.auth.isLoggedIn = true
    state.auth.rules = payload.username
    res(state.auth)
  })
}
