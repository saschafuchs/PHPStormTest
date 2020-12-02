export const state = () => ({
  testState: true
})

export const actions = {
  toggleState ({ commit }) {
    commit('TOGGLE_STATE')
  }
}

export const mutations = {
  TOGGLE_STATE (state) {
    state.testState = !state.testState
  }
}
export const getters = {
  getTestState: state => state.testState
}
