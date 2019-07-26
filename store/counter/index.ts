import { LocalContext, LocalGetters, RootState, RootGetters } from 'vuex'
// __________________________________________
//
type Context = LocalContext['counter']
type Getters = LocalGetters['counter']
type State = { count: number }
// __________________________________________
//
export const state = (): State => ({ count: 0 })
// __________________________________________
//
export const getters = {
  double(
    state: State,
    getters: Getters,
    rootState: RootState,
    rootGetters: RootGetters
  ) {
    return state.count * 2
  },
  expo(state: State) {
    return (amount: number) => state.count ** amount
  }
}
// __________________________________________
//
export const mutations = {
  increment(state: State) {
    state.count++
  },
  decrement(state: State) {
    state.count--
  },
  setCount(state: State, payload: { amount: number }) {
    state.count = payload.amount
  }
}
// __________________________________________
//
export const actions = {
  acyncIncrement(ctx: Context) {
    ctx.commit('increment')
  },
  acyncDecrement(ctx: Context) {
    ctx.commit('decrement')
  },
  acyncSetCount(ctx: Context, payload: { amount: number }) {
    ctx.commit({ type: 'setCount', amount: payload.amount })
  }
}
