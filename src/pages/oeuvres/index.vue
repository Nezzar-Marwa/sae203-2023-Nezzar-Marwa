<script setup lang="ts">
import OeuvresCard from '@/components/OeuvresCard.vue';
import { Alloeuvres } from '@/backend';
import type { OeuvreResponse } from '@/pocketbase-types';
const touteslesoeuvres: OeuvreResponse[] = await Alloeuvres();
</script>

<template>
    <h1 class="h3 mt-14 text-center">Découvrez les oeuvres emblématiques de l'orientalisme et plongez dans l'univers des artistes </h1>
    <div class="justify-center p-24 items-center lg:grille ">
        <!-- <OeuvresCard v-bind="touteslesoeuvres[0]" /> -->
        <OeuvresCard v-for="uneoeuvres of touteslesoeuvres" :v-key="Alloeuvres" v-bind="{ ...uneoeuvres }" />
    </div>
</template>