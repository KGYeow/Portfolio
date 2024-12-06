<template>
  <v-row class="mb-0">
    <v-col class="text-center mt-2 px-10 py-6 d-flex flex-wrap-reverse justify-space-between">
      <div class="text-left mb-1">
        Copyright © {{ new Date().getFullYear() }} <a flat variant="text" href="#" target="_self" class="pl-1 text-grey200 fw-bold">Yeow Kok Guan</a>. All Rights Reserved.
      </div>
      <div class="d-flex mb-1">
        <div v-for="(item, i) in socialMedia" :key="i">
          <v-btn :class="{ 'ms-3': i != 0 }" density="compact" variant="plain" :icon="item.icon" :ripple="false" :href="item.link" target="_blank"/>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import socialMedia from '~/data/socialMedia'
</script>