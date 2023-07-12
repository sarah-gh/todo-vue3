<template>
  <div v-if="list" class="container">
    <router-link :to="{name: 'home'}" class="btn mx-2 mb-4">بازگشت</router-link>
    <h3>{{ list.title }}</h3>
    <div>
      <span class="">جستجو:</span>
      <input type="text" v-model="searchValue" class="form-control mb-3" />
      <div dir="ltr">
        <EasyDataTable
          :headers="headers"
          :items="items"
          show-index
          :theme-color="'#212529'"
          :search-field="searchFields"
          :search-value="searchValue"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useTodoStore } from '@/store/index.js'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'ViewPage',
  setup () {
    const todoStore = useTodoStore()
    const list = ref(null)
    const items = ref([])
    const searchValue = ref('')
    const searchFields = ref(['title', 'description'])

    onMounted(() => {
      const route = useRoute()
      const id = parseInt(route.query.id) // دریافت پارامتر id از کوئری استرینگ
      console.log('onMounted', id)
      list.value = todoStore.list[id]
      items.value = list.value ? list.value.todos : []
    })

    return {
      list,
      headers: [
        { text: 'title', value: 'title' },
        { text: 'dueDate', value: 'dueDate' },
        { text: 'description', value: 'description' },
        { text: 'priority', value: 'priority' }
      ],
      items,
      searchValue,
      searchFields
    }
  }
}
</script>
