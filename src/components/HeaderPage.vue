<script setup lang="ts">
  import { ref, computed, watch } from 'vue'
  import LogoIcon from '@/components/icons/logo_mobile.vue'
  import { RouterLink } from 'vue-router'

	
  const activeMenu = ref(false)

  function closeMenu() {
	  activeMenu.value = false
  }

</script>

<template>
  <header class=" bg-noirfooter lg:bg-backgroundcolor z-10 flex w-full translate-y-0 items-stretch justify-between px-6 py-2 transition-all duration-300 ease-in-out lg:py-0">
    <div class="flex items-center">
      <a href="/">
        <LogoIcon />
      </a>
    </div>

    <div class="flex items-center gap-4 lg:flex-row-reverse">

      <button class="relative z-10 flex h-5 w-8 flex-col justify-between lg:hidden" @click="activeMenu = !activeMenu"
      > 
        <div class="ease h-[2px] w-full transform rounded-full bg-backgroundcolor transition duration-300" :class="{ 'translate-y-[9px] rotate-45 bg-backgroundcolor': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-backgroundcolor transition duration-300" :class="{ 'bg-backgroundcolor opacity-0': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-backgroundcolor transition duration-300" :class="{ '-translate-y-[9px] -rotate-45 bg-backgroundcolor': activeMenu }"></div>
      </button>

			<nav class=" h1 invisible opacity-0 fixed inset-0 h-screen w-screen bg-noirfooter text-backgroundcolor lg:text-noir transition-all duration-300 ease-in-out lg:visible lg:relative lg:pt-4 lg:flex lg:h-auto lg:w-auto lg:items-center lg:bg-transparent lg:h3 lg:uppercase lg:tracking-wide lg:bg-backgroundcolor lg:opacity-100"
      :class="{ '!visible opacity-100': activeMenu }"
      v-scroll-lock="activeMenu"
      >
		    <ul class="mt-[25vh] ml-24 lg:m-0 lg:flex">
		      <li class="menu-item"><RouterLink class="menu-link" to="/orientalisme" @click="closeMenu">L'orientalisme</RouterLink></li>
		      <li class="menu-item"><RouterLink class="menu-link" to="/oeuvres" @click="closeMenu">Les oeuvres</RouterLink></li>
		      <li class="menu-item"><RouterLink class="menu-link" to="/artistes" @click="closeMenu">Les artistes</RouterLink></li>
          <li class="menu-item"><RouterLink class="menu-link" to="/infos_pratiques" @click="closeMenu">Informations pratiques</RouterLink></li>
		      <li class="menu-item"><RouterLink class="menu-link mb-9" to="/contact" @click="closeMenu">Contact</RouterLink></li>
		    </ul>
		  </nav>
    </div>
  </header>
</template>