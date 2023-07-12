<template>
  <div class="app" dir="rtl" data-bs-theme="light">
    <button @click="toggleTheme">تغییر تم</button>
    <router-view />
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  name: 'app',

  setup () {
    // const isDarkMode = inject('isDarkMode')
    // const toggleTheme = inject('toggleTheme')

    const themeMap = {
      dark: 'light',
      light: 'dark'
    }

    let tmp

    const theme = ref(
      localStorage.getItem('theme') ||
      ((tmp = Object.keys(themeMap)[0]), localStorage.setItem('theme', tmp), tmp)
    )
    const bodyClass = document.body.classList
    bodyClass.add(theme.value)

    function toggleTheme () {
      const current = localStorage.getItem('theme')
      const next = themeMap[current]

      bodyClass.replace(current, next)
      localStorage.setItem('theme', next)
      theme.value = next
    }

    watch(theme, (newVal) => {
      bodyClass.replace(themeMap[newVal], newVal)
    })

    // export { theme, toggleTheme }

    return {
      theme,
      toggleTheme,
      leftDrawerOpen: ref(false)
    }
  }
}

</script>
