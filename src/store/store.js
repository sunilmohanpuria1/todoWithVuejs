import Vue from 'vue'
import Vuex from  'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
    {
        state :{
            todos: [],
            newTodo: ''
        },
        mutations:{
            GET_TODO(state, todo){
                state.newTodo = todo
              },
            ADD_TODO(state){
                state.todos.push({
                body: state.newTodo,
                completed: false
                })
            },
            REMOVE_TODO(state, todo){
                var todos = state.todos
                todos.splice(todos.indexOf(todo), 1)
            }
        },
        actions:{
            getTodo({commit}, todo){
                commit('GET_TODO', todo)
              },
              addTodo({commit}){
                commit('ADD_TODO')
              },
              removeTodo({commit}, todo){
                commit('REMOVE_TODO', todo)
              }
        },
        getters: {
            newTodo: state => state.newTodo,
            todos: state => state.todos
        }
    }
)