<template>
    <div class="todo-list card my-4 p-1 rounded mx-2">
      <TodoForm @add="addTodo" v-if="showForm" />
      <div class="px-2">
        <div class="d-flex mt-3 ">
          <button type="button" class="btn btn-primary" @click="addForm">
            ایجاد کار جدید
          </button>
          <router-link :to="{name: 'todo', query: {id: index}}" class="btn btn-info mx-2">مشاهده</router-link>

        </div>

        <h3 class="text-lg todo-title">عنوان : {{ todos.title }}</h3>
        <p class="todo-description">توضیحات : {{ todos.description }}</p>
        <p class="todo-due-date">تاریخ ایجاد : {{ todos.date }}</p>
      </div>
      <div class="mt-3 mx-0 px-0">
          <TodoCard v-for="(todo, index) in todos.todos" :key="index"
          :todo="todo" @delete="deleteTodo(index)" class="mt-3 mx-3" />
      </div>
    </div>
</template>

<script>
import TodoCard from '@/components/todoCard.vue'
import TodoForm from '@/components/todoForm.vue'
import { useTodoStore } from '@/store/index.js'
import { ref } from 'vue'

export default {
  name: 'todoList',
  props: {
    todos: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  components: {
    TodoForm,
    TodoCard
  },
  emits: ['addTodo', 'deleteTodo'],
  setup (props, { emit }) {
    const todoStore = useTodoStore()
    const showForm = ref(false)

    const show = () => {

    }

    const deleteTodo = (index) => {
      // emit('deleteTodo', index)
    }

    const addForm = () => {
      showForm.value = true
    }

    const addTodo = (todo) => {
      todoStore.addTodo(todo, props.index)
      showForm.value = false
    }

    return {
      show,
      deleteTodo,
      addForm,
      showForm,
      addTodo
    }
  }
}
</script>

<style lang="scss">
.todo-list.card {
  min-width: 350px;
  width: 390px;
  max-height: 500px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #adadad;
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #949494;
    border-radius: 10px;
  }
  .btn {
    max-height: 40px;
  }
  .form-group {
    width: 40% ;
  }
  button.btn-primary {
    margin-bottom: 20px;
  }

  ul.list-group {
    margin-top: 20px;
  }
}

</style>
