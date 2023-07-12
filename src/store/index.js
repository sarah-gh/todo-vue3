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
        title: 'لیست سوم',
        date: '2/12/2023',
        description: 'تست تست تست ',
        todos: [{ title: 'کار 3', description: 'یبرتاذ', dueDate: '2023-07-13', priority: 'Low' }, { title: 'کار 6', description: 'dfjhbjhfv', dueDate: '2023-07-13', priority: 'Medium' }, { title: 'oere', description: 'df jhbjhfvsd  sdfihbevc', dueDate: '2023-07-13', priority: 'High' }]
      },
      {
        title: 'لیست چهارم',
        date: '2/12/2023',
        description: 'تست تست تست ',
        todos: [{ title: 'بتاذبیتارذ', description: 'یبرتاذ', dueDate: '2023-07-13', priority: 'Low' }, { title: 'fdhfv', description: 'dfjhbjhfv', dueDate: '2023-07-13', priority: 'Medium' }, { title: 'oere', description: 'df jhbjhfvsd  sdfihbevc', dueDate: '2023-07-13', priority: 'High' }]
      }
    ]
  }),
  actions: {
    addTodo (todo, index) {
      this.list[index].todos.push(todo)
    },
    addList (list) {
      this.list.push(list)
    },
    deleteTodo (indexList, indexTodo) {
      console.log(indexList, indexTodo)
      this.list[indexList].todos.splice(indexTodo, 1)
    },
    editTodo (indexList, indexTodo, updatedTodo) {
      this.list[indexList].todos.splice(indexTodo, 1, updatedTodo)
    }
  }
})

export const useTheme = defineStore('theme', {
  state: () => ({
    theme: 'light'
  })
})
