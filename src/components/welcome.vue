<template>
    <div>
       <input  :value="newTodo" @change="getTodo">
        <button @click="addTodo">Add Todo</button>
        <ul>
            <li v-for="todo in todos" :key="todo">
                {{todo.body}}
                <button type="button" @click="remove(todo)" > Remove</button>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name:"welcome",
    data :function () { 
      return{
        }
    },
    methods:{
        getTodo(e){
                this.$store.dispatch('getTodo', e.target.value)
        },
        addTodo(){
                this.$store.dispatch('addTodo')
        },
        remove(todo){
                this.$store.dispatch('removeTodo', todo)
            }
    },
    computed: {
            newTodo(){
                return this.$store.getters.newTodo
            },
             todos(){
            return this.$store.getters.todos
        }
        }
}
</script>
