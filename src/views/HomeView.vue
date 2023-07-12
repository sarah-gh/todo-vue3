<template>
  <div class="home-page container">
    <listForm @add="addList" v-if="showForm" />
    <button type="button" class="btn btn-primary mt-3 mx-auto" @click="addForm">
      ایجاد لیست جدید
    </button>
    <div class="card pb-3 px-3 d-flex flex-column flex-md-row">
      <div class="form-group mt-3">
        <label> فیلتر بر اساس:</label>
        <Field v-model="filter" as="select" name="filter" class="form-control">
          <option value=""></option>
          <option value="title">عنوان</option>
          <option value="dueDate">تاریخ</option>
          <option value="priority">اولویت</option>
        </Field>
        <Field v-if="filter == 'title'" v-model="filterItem" name="description" type="text" class="form-control" />
        <Field v-if="filter == 'dueDate'" v-model="filterItem" name="dueDate" type="date" class="form-control" />
        <Field v-model="filterItem" v-if="filter == 'priority'" as="select" class="mt-2 form-control">
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
    <div class="d-flex scroll-lists" style="overflow-x: auto;">
      <todoList v-for="(todo, index) in todos" :key="index+'-todos'" :index="index" :todos="todo"></todoList>
    </div>
  </div>
</template>

<script>
import { useTodoStore } from '@/store/index.js'
import listForm from '@/components/listForm.vue'
import todoList from '@/components/todoList.vue'
import { ref } from 'vue'
import { Field } from 'vee-validate'

export default {
  components: {
    Field,
    listForm,
    todoList
  },
  setup () {
    const todoStore = useTodoStore()
    const showForm = ref(false)
    const filterItem = ref('')
    const filter = ref('')
    const search = ref('')
    const todos = ref(todoStore.list)

    const addList = (todo) => {
      todoStore.addList(todo)
      showForm.value = false
    }

    const addForm = () => {
      showForm.value = true
    }

    const deleteTodo = (index) => {
      todoStore.deleteTodo(index)
    }

    // const filteredTodosPriority = () => {
    //   if (filterItem.value) {
    //     return todoStore.todos.filter(todo => todo[filter.value] === filterItem.value || todo[filter.value].includes(filterItem.value))
    //   } else return todoStore.todos
    // }

    // watch(filterItem, () => {
    //   todos.value = filteredTodosPriority()
    // })

    // watch(filter, () => {
    //   todos.value = todoStore.todos
    //   filterItem.value = ''
    // })

    return {
      todoStore,
      addList,
      todos,
      filterItem,
      filter,
      search,
      showForm,
      addForm,
      deleteTodo
    }
  }
}
</script>

<style lang="scss">
.scroll-lists {
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
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
}
.home-page {
  .form-group {
    width: 40%;
  }
  button.btn-primary {
    margin-bottom: 20px;
  }

  ul.list-group {
    margin-top: 20px;
  }
}

</style>
