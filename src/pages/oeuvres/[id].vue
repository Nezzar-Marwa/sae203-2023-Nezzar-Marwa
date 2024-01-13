<script setup lang="ts">
import { pb } from '@/backend'
import { OneId } from '@/backend';



const props = defineProps<{ id: string, }>();
const informationOeuvre = await OneId(props.id)
const img0 = informationOeuvre.image
// si pas d'image (undefined) garde undefined
const urlImg0 = img0 && pb.getFileUrl(informationOeuvre, img0, { thumb: '100x200' })
const infoArtiste = informationOeuvre.expand.artistes

// @ts-ignore
</script>

<template>
  <div class=" pt-12">
    <h1 class="h2 mt-10 mb-5 lg:text-center "> {{ informationOeuvre.nom }}</h1>
          <img :src="urlImg0"
            class=" m-auto self-stretch flex-grow-0 flex-shrink-0  rounded-tl-[7px] rounded-tr-[7px] object-cover" />
     <p class="h4 mt-3 mb-8 text-center lg:mx-96">{{ informationOeuvre.description }}</p>

    </div> 
     
</template>