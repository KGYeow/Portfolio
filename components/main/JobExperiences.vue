<template>
  <!-- Job Experiences -->
  <v-sheet class="maxWidth bg-transparent">
    <!-- Title -->
    <h1 id="title-experiences" class="font-weight-black mb-10 text-center" style="scroll-margin-top: 90px">Experiences</h1>

    <!-- Experience List -->
    <!-- <v-expansion-panels class="experience-panels" rounded="3">
      <v-expansion-panel
        class="mb-5"
        v-for="(item, i) in jobExperiences"
        :key="i"
        elevation="15"
        rounded="3"
        color="card"
      >
        <v-expansion-panel-title>
          <div class="">
            <v-label class="text-subtitle-1 font-weight-medium text-grey200">{{ item.timeStart }} - {{ item.timeEnd }}</v-label>
            <h5 class="text-h5 mb-1">{{ item.job }}</h5>
            <h5 class="text-subtitle-1 text-grey200 font-weight-medium font-italic">{{ item.company }}</h5>
          </div>
        </v-expansion-panel-title>
        <v-expansion-panel-text class="bg-card">
          <p class="text-body-1 font-weight-light mb-2">{{ item.description }}</p>
          <div class="d-flex flex-wrap">
            <v-chip class="text-body-2 me-2 my-1" density="compact" v-for="skill in item.skills">{{ skill }}</v-chip>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels> -->

    <!-- Experience List -->
    <v-timeline :align="`start`">
      <v-timeline-item
        v-for="exp in jobExperiences"
        size="small"
      >
        <template #opposite>
          <!-- <div
            class="pt-1 headline font-weight-bold"
            :v-text="`${exp.timeStart} - ${exp.timeEnd}`"
          >
            {{ exp.timeStart }} - {{ exp.timeEnd }}
          </div> -->
          <v-label class="text-subtitle-1 font-weight-medium text-grey200">{{ exp.timeStart }} - {{ exp.timeEnd }}</v-label>
        </template>
        <v-expansion-panels class="experience-panels" rounded="3">
          <v-expansion-panel
            class="mb-5"
            elevation="15"
            rounded="3"
            color="card"
          >
            <v-expansion-panel-title>
              <div class="">
                <!-- <v-label class="text-subtitle-1 font-weight-medium text-grey200">{{ exp.timeStart }} - {{ exp.timeEnd }}</v-label> -->
                <h5 class="text-h5 mb-1">{{ exp.job }}</h5>
                <h5 class="text-subtitle-1 text-grey200 font-weight-medium font-italic">{{ exp.company }}</h5>
              </div>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="bg-card">
              <p class="text-body-1 font-weight-light mb-2">{{ exp.description }}</p>
              <div class="d-flex flex-wrap">
                <v-chip class="text-body-2 me-2 my-1" density="compact" v-for="skill in exp.skills">{{ skill }}</v-chip>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-timeline-item>
    </v-timeline>
  </v-sheet>
</template>

<script setup lang="ts">
import jobExperiences from '~/data/experiences'
</script>