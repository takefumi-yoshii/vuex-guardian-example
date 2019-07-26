import uuid from 'uuid/v4'
import { LocalContext, LocalGetters, RootState, RootGetters } from 'vuex'
// __________________________________________
//
type Getters = LocalGetters['todos']
type Context = LocalContext['todos']
type State = { todos: Todo[] }
export type Todo = { id: string; done: boolean; task: string }
// __________________________________________
//
export const state = (): State => ({ todos: [] })
// __________________________________________
//
export const getters = {
  todosCount(
    state: State,
    getters: Getters,
    rootState: RootState,
    rootGetters: RootGetters
  ) {
    return state.todos.length
  },
  doneTodosCount(state: State) {
    // if (Math.random() > 0.5) return null
    return state.todos.filter(todo => todo.done).length
  }
}
// __________________________________________
//
export const mutations = {
  addTodo(state: State, todo: Todo) {
    state.todos.push(todo)
  },
  doneTodo(state: State, payload: { id: string }) {
    state.todos = state.todos.map(todo => {
      if (todo.id !== payload.id) return todo
      return { ...todo, done: true }
    })
  }
}
// __________________________________________
//
export const actions = {
  acyncAddTodo(ctx: Context, task: string) {
    ctx.commit('addTodo', { id: uuid(), done: false, task })
  },
  acyncDoneTodo(ctx: Context, payload: { id: string }) {
    ctx.commit({ type: 'doneTodo', id: payload.id })
  }
}
