<script setup lang="ts">
import ArtistesCard from '@/components/ArtistesCard.vue';
import { Allartistes } from '@/backend';
import type { ArtisteResponse } from '@/pocketbase-types';
const lesartistes:ArtisteResponse[] = await Allartistes();
</script>

<template>
    <div class="justify-center p-24 items-center grille">
        <ArtistesCard v-for="unartistes of lesartistes" :v-key="Allartistes" v-bind="{ ...unartistes }" /> 
    </div>

      <div class="flex justify-center items-center mb-7 ">
        <button
          class=" rounded-lg border-2 border-noirfooter px-5 py-2 font-semibold text-noir hover:bg-noirfooter hover:text-backgroundcolor">
          <RouterLink to="/">Page d'accueil</RouterLink>
        </button>
      </div>
</template>

