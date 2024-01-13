<script setup lang="ts">
import { pb } from '@/backend'
import { OneId2 } from '@/backend';


const props = defineProps<{ id: string, }>();
const informationArtiste = await OneId2(props.id)
const img0 = informationArtiste.image
// si pas d'image (undefined) garde undefined
const urlImg0 = img0 && pb.getFileUrl(informationArtiste, img0, { thumb: '100x200' })
// @ts-ignore
const informationOeuvres: OeuvresResponse[] = informationArtiste.expand.oeuvres
</script>

<template>
    <h1 class="h2 mt-10 mb-5 lg:text-center "> {{ informationArtiste.nom }} {{ informationArtiste.prenom }}</h1>
    <img :src="urlImg0"
    class=" m-auto self-stretch flex-grow-0 flex-shrink-0  rounded-tl-[7px] rounded-tr-[7px] object-cover"/>
    <p class="h4 mt-3 mb-8 text-center lg:mx-96">{{ informationArtiste.description }}</p>

    <h1 class="h3 mt-10 text-center">Voici la liste des oeuvres de cet auteur </h1>  
<div v-for="uneoeuvre of informationOeuvres"
  {{ uneoeuvre.nom }}>
  <p class="text-center mb-11">{{ uneoeuvre.nom}}</p>
   </div> 
</template>