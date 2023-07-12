<template>
  <div class="app" dir="rtl">
    <!-- <div>
      <router-link to=""> about</routerLink>
      <router-link to="about"> about</routerLink>
    </div> -->
    <RouterView></RouterView>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'LayoutDefault',

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
