<script setup lang="ts">
import { pb } from '@/backend'
import type { OeuvreResponse } from '@/pocketbase-types'

const props: OeuvreResponse = defineProps<OeuvreResponse>()

const img0 = props.image
// si pas d'image (undefined) garde undefined
const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '100x200' })
</script>
<template>
  <RouterLink :to="{ name: 'oeuvres-id', params: { id } }" class=" col-span-3">
    <div
      class=" shadow-2xl flex flex-col justify-start  overflow-hidden gap-[3px] rounded-[7px] bg-backgroundcolor mb-14">
      <img :src="urlImg0"
        class="self-stretch  flex-grow-0 h-52 flex-shrink-0  rounded-tl-[7px] rounded-tr-[7px] object-cover" />
      <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 p-2">
        <div class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0  gap-0.5">

          <p class="h3 text-left font-bold text-noir">
            {{ nom }}
          </p>
          <p class=" h3 text-left text-noirfooter">
            {{ lartiste }}
          </p>
        </div>
        <p class=" h3 text-left text-noirfooter">{{ date.slice(0,4) }}</p>
      </div>
    </div>
  </RouterLink>
</template>