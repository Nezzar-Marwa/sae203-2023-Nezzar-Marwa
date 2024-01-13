<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderPage from './components/HeaderPage.vue'
import FooterPage from './components/FooterPage.vue'
import PocketBase from 'pocketbase'

// var pocketbase_ip = ''
// if (import.meta.env.MODE === 'production')
//   pocketbase_ip = 'http://45.155.169.191:80'
// else
//   pocketbase_ip = 'http://127.0.0.1:8090'

// const pb = new PocketBase(pocketbase_ip)
</script>



<template>
  <HeaderPage />
  

  <main>
<Suspense>
  <RouterView />
</Suspense>
  </main>

  <FooterPage />
</template>
