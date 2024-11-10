<template>
  <!-- Job Experiences -->
  <v-sheet class="maxWidth bg-transparent">
    <!-- Title -->
    <h1 class="font-weight-black mb-10 text-center">Experiences</h1>

    <!-- Experience List -->
    <v-data-iterator :items="jobExperiences">
      <template #default="{ items }">
        <div class="d-flex flex-wrap justify-space-between">
          <v-card class="px-6 py-4" max-width="360" rounded="2" elevation="10" v-for="(item, i) in items" :key="i">
            <v-label class="text-subtitle-1 font-weight-medium text-muted">{{ item.raw.timeStart }} - {{ item.raw.timeEnd }}</v-label>
            <h5 class="text-h5 mb-1">{{ item.raw.job }}</h5>
            <h5 class="text-subtitle-1 text-muted font-weight-medium font-italic mb-3">{{ item.raw.company }}</h5>
            <p class="text-body-1 font-weight-light mb-2">{{ item.raw.description }}</p>
            <div class="d-flex flex-wrap">
              <v-chip class="text-body-2 me-2 my-1" density="compact" v-for="skill in item.raw.skills">{{ skill }}</v-chip>
            </div>
          </v-card>
        </div>
      </template>
    </v-data-iterator>
  </v-sheet>
</template>

<script setup lang="ts">
import jobExperiences from '~/data/experiences'
</script>