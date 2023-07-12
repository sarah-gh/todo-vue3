import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    list: [
      {
        title: 'لیست اول',
        date: '2/12/2023',
        description: 'تست تست تست ',
        todos: [{ title: 'کار اول', description: 'یبرتاذ', dueDate: '2023-07-13', priority: 'Low' }, { title: 'کار 4', description: 'dfjhbjhfv', dueDate: '2023-07-13', priority: 'Medium' }, { title: 'oere', description: 'df jhbjhfvsd  sdfihbevc', dueDate: '2023-07-13', priority: 'High' }]
      },
      {
        title: 'لیست دوم',
        date: '2/12/2023',
        description: 'تست تست تست ',
        todos: [{ title: 'کار 2', description: 'یبرتاذ', dueDate: '2023-07-13', priority: 'Low' }, { title: 'کار 5', description: 'dfjhbjhfv', dueDate: '2023-07-13', priority: 'Medium' }, { title: 'oere', description: 'df jhbjhfvsd  sdfihbevc', dueDate: '2023-07-13', priority: 'High' }]
      },
      {
        title: 'لیست دوم',
        date: '2/12/2023',
        description: 'تست تست تست ',
        todos: [{ title: 'کار 3', description: 'یبرتاذ', dueDate: '2023-07-13', priority: 'Low' }, { title: 'کار 6', description: 'dfjhbjhfv', dueDate: '2023-07-13', priority: 'Medium' }, { title: 'oere', description: 'df jhbjhfvsd  sdfihbevc', dueDate: '2023-07-13', priority: 'High' }]
      },
      {
        title: 'لیست دوم',
        date: '2/12/2023',
        description: 'تست تست تست ',
        todos: [{ title: 'بتاذبیتارذ', description: 'یبرتاذ', dueDate: '2023-07-13', priority: 'Low' }, { title: 'fdhfv', description: 'dfjhbjhfv', dueDate: '2023-07-13', priority: 'Medium' }, { title: 'oere', description: 'df jhbjhfvsd  sdfihbevc', dueDate: '2023-07-13', priority: 'High' }]
      }
    ]
  }),
  actions: {
    addTodo (todo, index) {
      // if (this.list[index] && this.list[index].length > 0) {
      this.list[index].todos.push(todo)
      // } else {
      //   this.list[index].todos = []
      //   this.list[index].todos.push(todo)
      // }
      // this.todos.push(todo)
    },
    addList (list) {
      this.list.push(list)
    },
    deleteTodo (index) {
      // this.todos.splice(index, 1)
    },
    editTodo (index, updatedTodo) {
      // this.todos.splice(index, 1, updatedTodo)
    }
  }
})
