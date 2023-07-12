<template>
  <div class="card mb-3 p-3 rounded shadow todo-card"  :class="{'dark': isDarkMode}">
    <h3 class="text-lg todo-title">عنوان : {{ todo.title }}</h3>
    <p class="todo-description">توضیحات : {{ todo.description }}</p>
    <p class="todo-due-date">تاریخ سررسید : {{ todo.dueDate }}</p>
    <p class="todo-priority">اولویت : {{ todo.priority }}</p>
    <div class="todo-actions d-flex">
      <button class="btn btn-primary" @click="editTodo">ویرایش</button>
      <button class="btn btn-danger" @click="deleteTodo">حذف</button>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    const isDarkMode = inject('isDarkMode')

    const editTodo = () => {
      // عملیات ویرایش کار
    }

    const deleteTodo = () => {
      // عملیات حذف کار
    }

    return {
      isDarkMode,
      editTodo,
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
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.todo-description {
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
}

.todo-due-date, .todo-priority {
  margin: 0.2rem 0;
  font-size: 1rem;
}

.btn {
  height: 2.5rem;
}

.todo-actions {
  margin-top: 0.5rem;
}

.todo-actions button {
  margin-right: 0.5rem;
}
</style>
