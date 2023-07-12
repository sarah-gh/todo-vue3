import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [{ title: 'بتاذبیتارذ', description: 'یبرتاذ', dueDate: '2023-07-13', priority: 'Low' }, { title: 'fdhfv', description: 'dfjhbjhfv', dueDate: '2023-07-13', priority: 'Medium' }, { title: 'oere', description: 'df jhbjhfvsd  sdfihbevc', dueDate: '2023-07-13', priority: 'High' }]
  }),
  actions: {
    addTodo (todo) {
      this.todos.push(todo)
    },
    deleteTodo (index) {
      this.todos.splice(index, 1)
    },
    editTodo (index, updatedTodo) {
      this.todos.splice(index, 1, updatedTodo)
    }
  }
})
