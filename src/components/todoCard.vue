<template>
  <div class="card mb-3 p-3 rounded shadow todo-card" >
    <TodoForm @add="addTodo" v-if="showEditForm" :initialValues="initialValues"/>
    <div v-if="!showEditForm">
      <h3 class="text-lg todo-title">عنوان : {{ todo.title }}</h3>
      <p class="todo-description">توضیحات : {{ todo.description }}</p>
      <p class="todo-due-date">تاریخ سررسید : {{ todo.dueDate }}</p>
      <p class="todo-priority">اولویت : {{ todo.priority }}</p>
      <div class="todo-actions d-flex">
        <button class="btn btn-primary" @click="editTodo">ویرایش</button>
        <button class="btn btn-danger" @click="deleteTodo">حذف</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import TodoForm from '@/components/todoForm.vue'

export default {
  name: 'todoCard',
  props: {
    index: {
      type: Number
    },
    todo: {
      type: Object,
      required: true
    }
  },
  components: {
    TodoForm
  },
  emits: ['editTodo', 'deleteTodo', 'addTodo'],
  setup (props, { emit }) {
    const mode = ref('add')
    const showEditForm = ref(false)
    const deleteTodo = () => {
      emit('deleteTodo', props.index)
      // عملیات حذف کار
    }

    const initialValues = ref({})

    const editTodo = (index) => {
      mode.value = 'edit'
      showEditForm.value = !showEditForm.value
      emit('editTodo', props.index)
      initialValues.value = props.todo
    }

    const addTodo = (todo) => {
      showEditForm.value = false
      emit('addTodo', todo)
    }

    return {
      editTodo,
      showEditForm,
      addTodo,
      initialValues,
      deleteTodo
    }
  }
}
</script>

<style scoped>
.todo-card {
  width: 90%;
  margin-bottom: 1rem;
  padding: 1rem;
  direction: rtl;
}

.todo-title {
  margin: 0 0 0.3rem;
  font-size: 1.3rem;
  font-weight: bold;
}

.todo-description {
  margin: 0 0 0.3rem;
  font-size: 1.1rem;
}

.todo-due-date, .todo-priority {
  margin: 0.2rem 0;
  font-size: 1rem;
}

.btn {
  height: 2.5rem;
  margin-bottom: 0 !important;
}

.todo-actions {
  margin-top: 0.5rem;
}

.todo-actions button {
  margin-right: 0.5rem;
}
</style>
