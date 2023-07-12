<template>
  <div class=" container">
    <TodoForm @add="addTodo" v-if="showForm" />
    <button type="button" class="btn btn-primary mt-3 mx-auto" @click="addForm">
      ایجاد کار جدید
    </button>
    <div class="d-flex flex-column flex-md-row">
      <div class="form-group mt-3">
        <label> فیلتر بر اساس:</label>
        <Field v-model="filter" as="select" class="form-control">
          <option value=""></option>
          <option value="title">عنوان</option>
          <option value="date">تاریخ</option>
          <option value="priorate">اولویت</option>
        </Field>

        <Field v-model="priority" v-if="filter == 'priorate'" as="select" class="mt-2 form-control">
          <option value=""></option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </Field>
      </div>

      <div class="form-group mt-3 mx-0 mx-md-4">
        <label> جستجو :</label>
        <Field v-model="search" name="description" type="text" class="form-control" />
      </div>
    </div>

    <ul class="mt-3 d-flex flex-wrap mx-0 px-0">
      <TodoCard v-for="(todo, index) in todos" :key="index" :todo="todo" @delete="deleteTodo(index)" class="mt-3 mx-3" />
    </ul>
  </div>
</template>

<script>
import { useTodoStore } from '@/store/index.js'
import TodoCard from '@/components/todoCard.vue'
import TodoForm from '@/components/todoForm.vue'
import { ref, watch } from 'vue'
import { Field } from 'vee-validate'

export default {
  components: {
    TodoCard,
    Field,
    TodoForm
  },
  setup () {
    const todoStore = useTodoStore()
    const showForm = ref(false)
    const priority = ref('')
    const filter = ref('')
    const search = ref('')
    const todos = ref(todoStore.todos)

    const addTodo = (todo) => {
      todoStore.addTodo(todo)
      showForm.value = false
    }

    const addForm = () => {
      showForm.value = true
    }

    const deleteTodo = (index) => {
      todoStore.deleteTodo(index)
    }

    const filteredTodosPriority = () => {
      if (priority.value) return todoStore.todos.filter(todo => todo.priority === priority.value)
      else return todoStore.todos
    }

    watch(priority, () => {
      todos.value = filteredTodosPriority()
    })

    return {
      todoStore,
      addTodo,
      todos,
      priority,
      filter,
      search,
      filteredTodosPriority,
      showForm,
      addForm,
      deleteTodo
    }
  }
}
</script>

<style>
.form-group {
  width: 40%;
}
button.btn-primary {
  margin-bottom: 20px;
}

ul.list-group {
  margin-top: 20px;
}

</style>
