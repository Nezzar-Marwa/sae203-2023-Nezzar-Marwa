<script setup lang="ts">
import ArtistesCard from '@/components/ArtistesCard.vue';
import { Allartistesbydates } from '@/backend';
import type { ArtisteResponse } from '@/pocketbase-types';
const artistefrise: ArtisteResponse[] = await Allartistesbydates();
</script>
<template>
  <div class=" bg-articles bg-opacity-70 my-10 py-11">
    <h1 class="h2 text-center mb-5">L'orientalisme</h1>
    <p class="h4 mx-9 lg:mx-72 mb-2">L'orientalisme est un mouvement littéraire et artistique né en Europe occidentale au
      XVIIIe siècle. Par son ampleur et sa vogue, tout au long du XIXe siècle, il marque l'intérêt et la curiosité des
      artistes et des écrivains pour les pays du couchant (le Maghreb) ou du Levant (le Moyen-Orient).
    </p>
    <p class="h4 mx-9 lg:mx-72 mb-3">L'orientalisme naît dans la fascination de l'Empire ottoman et suit sa lente
      désagrégation après la guerre d'indépendance grecque des années 1820 et la progression des colonisations
      européennes.</p>
    <img class=" m-auto" src="/public/img/mouvement.webp" alt="article" />

    <p class="h4 mx-9 lg:mx-72 my-4">Cette tendance exotique s'associe avec tous les courants artistiques du XIXe siècle,
      académique, romantique, et réaliste. Elle est présente en architecture, en musique, en peinture, en littérature, en
      poésie… Esthétique pittoresque, confondant les styles, les civilisations et les époques, l'orientalisme a créé de
      nombreux clichés et poncifs que l'on retrouve aujourd'hui encore en littérature ou au cinéma.</p>

    <p class="h4 mx-9 lg:mx-72 mb-2">Initié en France par l'évocation du monde ottoman dans Le Bourgeois gentilhomme de
      Molière au XVIIe siècle et par la traduction des Contes des Mille et Une Nuits par Antoine Galland en 1711, c'est un
      mouvement artistique qui marque l'intérêt dès cette époque pour les cultures des peuples de toutes les régions
      dominées par l'Empire ottoman, d'Afrique du Nord jusqu'au Caucase. Cet attrait pour l'ailleurs, la recherche de
      l'exotisme, influença la société.</p>

    <p class="h4 mx-9 lg:mx-72 mb-2">Les salons de la bourgeoisie et de la noblesse donnèrent réceptions et bals costumés
      sur le modèle fantastique et coloré des cours d'Orient : la mode des Turqueries est associée à la mode des
      chinoiseries rococo ou baroque. Certains personnages fortunés prirent la pose, pour faire peindre leur portrait,
      revêtus des habits soyeux seyants en sultan ou en émir.</p>
    <p class="h4 mx-9 lg:mx-72 mb-2">Un des exemples les plus fameux de cette esthétique en musique est la Marche Turque
      de Mozart. Cet orientalisme servira de « couverture » à Voltaire et Montesquieu dans Zadig et Les Lettres persanes,
      ils trouveront là un stratagème pour faire la satire du monde occidental sous couvert de personnages étrangers.</p>
  </div>




  <h1 class="h3 text-center pt-8 mb-4">voici une frise chronologique qui retrace les oeuvres présentées</h1>

  <ol class=" ml-14 lg:ml-40 border-l-2 border-noir">
    <!--élément 1-->
    <li>
      <div class="flex-start flex items-center pt-3">
        <div class="-ml-[8px] mr-3 h-[14px] w-[14px] rounded-full bg-articles"></div>
        <RouterLink to="/oeuvres/n0h6t1yyyz866q9" class="h3">Sultane</RouterLink>
      </div>
      <div class="mb-6 ml-4 ">
        <p class="h4 font-bold  text-noirfooter">
          1747
        </p>
        <img class=" w-64" src="/public/img/oeuvre-2-1.webp" alt="oeuvre nommé Sultane">
      </div>
    </li>
    <!--élément 2-->
    <li>
      <div class="flex-start flex items-center pt-3">
        <div class="-ml-[8px] mr-3 h-[14px] w-[14px] rounded-full bg-articles"></div>
        <RouterLink to="/oeuvres/zxv3g0al41nloiz" class="h3">Saada</RouterLink>
      </div>
      <div class="mb-6 ml-4 ">
        <p class="h4 font-bold  text-noirfooter">
          1845
        </p>
        <img class=" w-64" src="/public/img/delacroix-05-1.webp" alt="oeuvre nommé Sultane">
      </div>
    </li>
    <!--élément 3-->
    <li>
      <div class="flex-start flex items-center pt-3">
        <div class="-ml-[8px] mr-3 h-[14px] w-[14px] rounded-full bg-articles"></div>
        <RouterLink to="/oeuvres/ckvyaeh5crrf1c1" class="h3">Femmes fellahs au bord du Nil</RouterLink>
      </div>
      <div class="mb-6 ml-4 ">
        <p class="h4 font-bold  text-noirfooter">
          1856
        </p>
        <img class=" w-64" src="/public/img/Léon_Belly_-_01-1.webp" alt="oeuvre nommé Sultane">
      </div>
    </li>
    <!--élément 4-->
    <li>
      <div class="flex-start flex items-center pt-3">
        <div class="-ml-[8px] mr-3 h-[14px] w-[14px] rounded-full bg-articles"></div>
        <RouterLink to="/oeuvres/kb0inhogktktu52" class="h3">Jeune femme sur une terrasse</RouterLink>
      </div>
      <div class="mb-6 ml-4 ">
        <p class="h4 font-bold  text-noirfooter">
          1889
        </p>
        <img class=" w-64" src="/public/img/oeuvre-4.webp" alt="oeuvre nommé Sultane">
      </div>
    </li>
    <!--élément 5-->
    <li>
      <div class="flex-start flex items-center pt-3">
        <div class="-ml-[8px] mr-3 h-[14px] w-[14px] rounded-full bg-articles"></div>
        <RouterLink to="/oeuvres/faem77dvwi4k8p6" class="h3">Jeune fille de Laghouat</RouterLink>
      </div>
      <div class="mb-6 ml-4 ">
        <p class="h4 font-bold  text-noirfooter">
          1894
        </p>
        <img class=" w-64" src="/public/img/132px-Georges_Gasté_2-1.webp" alt="oeuvre nommé Sultane">
      </div>
    </li>
    <!--élément 6-->
    <li>
      <div class="flex-start flex items-center pt-3">
        <div class="-ml-[8px] mr-3 h-[14px] w-[14px] rounded-full bg-articles"></div>
        <RouterLink to="/oeuvres/vev8izzd2d9qf38" class="h3">Femme de ouled el naïl</RouterLink>
      </div>
      <div class="mb-6 ml-4 ">
        <p class="h4 font-bold  text-noirfooter">
          1908
        </p>

        <img class=" w-64" src="/public/img/Oeuvre-Alfred-Chataud-1.webp" alt="oeuvre nommé Sultane">
      </div>
      <div class="flex-start flex items-center pt-3">
        <div class=" mr-3 "></div>
        <RouterLink to="/oeuvres/n8clioysi8ab22x" class="h3">Le charmeur de serpent</RouterLink>
      </div>
      <div class="mb-6 ml-4 ">

        <img class=" w-64" src="/public/img/oeuvre-3-.webp" alt="oeuvre nommé Sultane">
      </div>
    </li>
    <!--élément 8-->
    <li>
      <div class="flex-start flex items-center pt-3">
        <div class="-ml-[8px] mr-3 h-[14px] w-[14px] rounded-full bg-articles"></div>
        <RouterLink to="/oeuvres/mewtm4ob6leoc4b" class="h3">Le Bain des brahmines à Madura</RouterLink>
      </div>
      <div class="mb-6 ml-4 ">
        <p class="h4 font-bold  text-noirfooter">
          1910
        </p>
        <img class=" w-64" src="/public/img/Georges_Gasté_4-1.webp" alt="oeuvre nommé Sultane">
      </div>
    </li>
  </ol>

  <h1 class="h3 text-center pt-8 mb-4">Et voici les artistes ayant créer ces oeuvres rangé eux aussi par ordre
    alphabétique</h1>
  <div class=" pt-6 flex overflow-hidden overflow-x-scroll justify-center gap-5 items-center  ">
    <ArtistesCard v-for="unartistes of artistefrise" :v-key="Allartistesbydates" v-bind="{ ...unartistes }"
    class="flex-none" />
  </div>
  <div class="flex justify-center items-center mb-7 ">
    <button
      class=" rounded-lg border-2 border-noirfooter px-5 py-2 font-semibold text-noir hover:bg-noirfooter hover:text-backgroundcolor">
      <RouterLink to="/">Page d'accueil</RouterLink>
    </button>
  </div>
</template>