import states from './states'
import mutations from './mutations'
import actions from './actions'

const services = {
  state: { ...states },
  actions: { ...actions },
  mutations: { ...mutations },
}

export default services
