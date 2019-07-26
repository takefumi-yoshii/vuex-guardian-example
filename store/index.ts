import { LocalContext } from 'vuex'
// __________________________________________
//
type State = { user: string }
type Context = LocalContext['']
// __________________________________________
//
export const state = (): State => ({
  user: 'Takepepe'
})
// __________________________________________
//
export const getters = {
  getUser(state: State) {
    return state.user
  }
}
// __________________________________________
//
export const mutations = {
  setUser(state: State, payload: { user: string }) {
    state.user = payload.user
  }
}
// __________________________________________
//
export const actions = {
  asyncSetUser(ctx: Context, payload: { user: string }) {
    ctx.commit('setUser', payload)
  }
}
