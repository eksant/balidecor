export function authLogin(context, payload) {
  return new Promise(async (resolve, reject) => {
    if (!payload) {
      reject('Invalid payload!')
    }

    context.commit('authLogin', payload)
    resolve('success')
    // context
    //   .commit('authLogin', payload)
    //   .then(result => {
    //     console.log('ressssss', result)
    //     res(result)
    //   })
    //   .catch(err => {
    //     rej(err)
    //   })
  })
}
