<template>
  <div class="home-page container">
    <listForm @add="addList" v-if="showForm" />
    <button type="button" class="btn btn-primary mt-3 mx-auto" @click="addForm">
      ایجاد لیست جدید
    </button>
    <div class="card pb-3 px-3 d-flex flex-column flex-md-row">
      <div class="form-group mt-3 mx-1">
        <label> فیلتر روی: </label>
        <Field v-model="selectList" as="select" name="filter" class="form-control">
          <option value=""></option>
          <option v-for="(list, index) in todoStore.list" :key="'option-'+index" :value="'option-'+index">{{ list.title }} (لیست {{ index+1 }} ام)</option>
        </Field>
      </div>

      <div class="form-group mt-3 mx-1">
        <label v-if="selectList"> فیلتر بر اساس:</label>
        <Field v-if="selectList" v-model="filter" as="select" name="filter" class="form-control">
          <option value=""></option>
          <option value="title">عنوان</option>
          <option value="dueDate">تاریخ</option>
          <option value="priority">اولویت</option>
        </Field>
      </div>

      <div class="form-group mt-3 mx-1">
        <label v-if="selectList && filter"> فیلتر:</label>
        <Field v-if="selectList && filter == 'title'"    v-model="filterItem" name="description" type="text" class="form-control" />
        <Field v-if="selectList && filter == 'dueDate'"  v-model="filterItem" name="dueDate" type="date" class="form-control" />
        <Field v-if="selectList && filter == 'priority'" v-model="filterItem" as="select" class="mt-2 form-control">
          <option value=""></option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </Field>
      </div>

      <!-- <div class="form-group mt-3 mx-0 mx-md-4">
        <label> جستجو :</label>
        <Field v-model="search" name="description" type="text" class="form-control" />
      </div> -->
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
import { ref, watch } from 'vue'
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
    const selectList = ref('')
    const filter = ref('')
    const search = ref('')
    const todos = ref(JSON.parse(JSON.stringify(todoStore.list)))

    const addList = (todo) => {
      todoStore.addList(todo)
      showForm.value = false
    }

    const addForm = () => {
      showForm.value = !showForm.value
    }

    const deleteTodo = (index) => {
      todoStore.deleteTodo(index)
    }

    // const filteredTodosPriority = () => {
    //   const index = selectList.value.split('-')[1]
    //   if (filterItem.value && todoStore.list[index].todos) {
    //     console.log(todoStore.list[index], filter.value, todoStore.list[index].todos)
    //     return todoStore.list[index].todos.filter(
    //       todo => todo[filter.value] === filterItem.value || todo[filter.value].includes(filterItem.value)
    //     )
    //   } else return todoStore.list[index]
    // }
    const filteredTodosPriority = () => {
      const index = selectList.value.split('-')[1]
      if (filterItem.value && todoStore.list[index].todos) {
        console.log('if:', todoStore.list[index].todos)
        return todoStore.list[index].todos.filter(
          todo => todo[filter.value] === filterItem.value || todo[filter.value].includes(filterItem.value)
        )
      } else {
        console.log('else', todoStore.list[index].todos)
        return JSON.parse(JSON.stringify(todoStore.list[index].todos))
      }
    }

    watch(selectList, () => {
      if (selectList.value) {
        const index = selectList.value.split('-')[1]
        console.log('selectList.value', selectList.value, [todoStore.list[index]])
        todos.value = JSON.parse(JSON.stringify([todoStore.list[index]]))
      } else {
        todos.value = JSON.parse(JSON.stringify(todoStore.list))
      }
    })

    watch(filterItem, () => {
      todos.value[0].todos = filteredTodosPriority()
    })

    watch(filter, () => {
      todos.value = JSON.parse(JSON.stringify([todoStore.list[selectList.value.split('-')[1]]]))
      filterItem.value = ''
    })

    return {
      todoStore,
      addList,
      selectList,
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
