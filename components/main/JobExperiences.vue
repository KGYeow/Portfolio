<template>
  <!-- Job Experiences -->
  <v-sheet class="maxWidth bg-transparent">
    <!-- Title -->
    <h1 id="title-experiences" class="font-weight-black mb-10 text-center" style="scroll-margin-top: 90px">Experiences</h1>

    <!-- Experience List -->
    <v-expansion-panels class="experience-panels" variant="popout" rounded="3">
      <!-- Experience Panel -->
      <v-expansion-panel
        class="mb-5"
        v-for="(item, i) in jobExperiences"
        :key="i"
        elevation="10"
        rounded="3"
      >
        <v-expansion-panel-title>
          <div class="">
            <v-label class="text-subtitle-1 font-weight-medium text-muted">{{ item.timeStart }} - {{ item.timeEnd }}</v-label>
            <h5 class="text-h5 mb-1">{{ item.job }}</h5>
            <h5 class="text-subtitle-1 text-muted font-weight-medium font-italic">{{ item.company }}</h5>
          </div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <p class="text-body-1 font-weight-light mb-2">{{ item.description }}</p>
          <div class="d-flex flex-wrap">
            <v-chip class="text-body-2 me-2 my-1" density="compact" v-for="skill in item.skills">{{ skill }}</v-chip>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- <v-slide-group center-active show-arrows>
      <div class="d-flex flex-wrap justify-space-between w-100">
        <v-slide-group-item v-for="(item, i) in jobExperiences" :key="i">
          <v-card class="mx-4 my-7 px-6 py-4" max-width="360" rounded="3" elevation="10">
            <v-label class="text-subtitle-1 font-weight-medium text-muted">{{ item.timeStart }} - {{ item.timeEnd }}</v-label>
            <h5 class="text-h5 mb-1">{{ item.job }}</h5>
            <h5 class="text-subtitle-1 text-muted font-weight-medium font-italic mb-3">{{ item.company }}</h5>
            <p class="text-body-1 font-weight-light mb-2">{{ item.description }}</p>
            <div class="d-flex flex-wrap">
              <v-chip class="text-body-2 me-2 my-1" density="compact" v-for="skill in item.skills">{{ skill }}</v-chip>
            </div>
          </v-card>
        </v-slide-group-item>
      </div>
    </v-slide-group> -->
  </v-sheet>
</template>

<script setup lang="ts">
import jobExperiences from '~/data/experiences'
</script>