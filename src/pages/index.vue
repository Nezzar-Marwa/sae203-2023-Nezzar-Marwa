<script setup lang="ts">
import OeuvresCard from '@/components/OeuvresCard.vue';
import ArtistesCard from '@/components/ArtistesCard.vue';
import { artistesfavoris } from '@/backend';
import { oeuvresfavoris } from '@/backend';
import type { ArtisteResponse } from '@/pocketbase-types';
import type { OeuvreResponse } from '@/pocketbase-types'
const artistefav: ArtisteResponse[] = await artistesfavoris();
const oeuvrefav: OeuvreResponse[] = await oeuvresfavoris();
</script>


<template>
    <header>
        <h1 class="h5">Art et Orient Découvrez notre exposition</h1>
        <img src="/img/homepagemobile.webp" alt="homepage" class="lg:hidden w-full">
        <img src="/img/homepagedesktop.webp" alt="homepage 2" class="hidden lg:block">
    </header>
    <div>
        <h1 class="h1 ml-6 mt-6">Une exposition inédite portant sur le thème de <span
                class="text-typogold">L'orientalisme</span></h1>
        <img src="/img/point_mobile.webp" alt="points" class="w-80 lg:w-96">
    </div>

    <section class="bg-articles py-11 mb-16 lg:bg-backgroundcolor">
        <article class="bg-articles lg:mx-80 py-10">
            <h1 class="h2 text-center mb-8">L'orientalisme</h1>
            <p class="h4 mx-14 lg:mx-24">L'orientalisme est un mouvement littéraire et artistique né en Europe occidentale
                au XVIIIe siècle. Par son ampleur et sa vogue, tout au long du XIXe siècle, il marque l'intérêt et la
                curiosité des artistes et des écrivains pour les pays du couchant (le Maghreb) ou du Levant (le
                Moyen-Orient). </p>
            <div class="flex justify-center items-center mt-8">
                <RouterLink to="/orientalisme" class="h4 underline">Voir plus</RouterLink>
            </div>
        </article>
    </section>

    <div>
        <h1 class="h1 text-center">Avant de découvrir cette exposition voici un petit avant goût
        </h1>

        <h1 class="h3 text-center pt-8 mb-4 my-14">Decouvrez nos oeuvres favorites du moment</h1>
        <div class="  pt-6 flex overflow-hidden overflow-x-scroll justify-center gap-5 items-center ">
            <OeuvresCard v-for="uneoeuvres of oeuvrefav" :v-key="oeuvresfavoris" v-bind="{ ...uneoeuvres }"
                class="flex-none " />
        </div>

        <section class="lg:grille lg:my-11 ">
            <img src="/img/Benjamin-Constant_Le-flamant-rose-3.webp" class="m-auto w-[350px] lg:col-span-6 col-start-5">
            <div class="bg-articles py-10 my-8 lg:col-span-4 col-start-5">
                <p class="h3 text-center mx-9">Cette période a aussi été marquée par de nombreuses personnes talentueuse qui
                    ont usées de nombreuses techniques et ont été une grande influence dans ce mouvement et les mouvements
                    ayant suivis.</p>
            </div>
        </section>

        <h1 class="h3 text-center pt-8 mb-4">Decouvrez nos artistes favorites du moment</h1>
        <div class=" pt-6 flex overflow-hidden overflow-x-scroll justify-center gap-5 items-center  ">
            <ArtistesCard v-for="unartistes of artistefav" :v-key="artistesfavoris" v-bind="{ ...unartistes }"
                class="flex-none" />
        </div>

        <div>
            <h1 class="h2 text-center my-8">Vous voila prêts pour ce merveilleux voyage.</h1>
        </div>
        <div>
            <h1 class="h4 text-center mb-8">Découvrez ici le déroulement de l'exposition</h1>
        </div>
        <div class="flex justify-center items-center mb-7 ">
            <button
                class=" rounded-lg border-2 border-noirfooter px-5 py-2 font-semibold uppercase text-noir hover:bg-noirfooter hover:text-backgroundcolor">
                <RouterLink to="/infos_pratiques">Informations Pratiques</RouterLink>
            </button>
        </div>

    </div>
</template>