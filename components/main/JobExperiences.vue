<template>
  <!-- Job Experiences -->
  <v-sheet class="maxWidth bg-transparent">
    <!-- Title -->
    <h1 id="title-experiences" class="font-weight-black mb-10 text-center" data-aos="fade-down">Experiences</h1>
    
    <!-- Experience List -->
    <v-timeline id="timeline-experience" dot-color="#000" side="end" :align="`start`" line-color="primary">
      <v-timeline-item
        v-for="exp in jobExperiences"
        size="x-small"
        hide-dot
      >
        <template #opposite>
          <div class="overflow-hidden">
            <v-label id="experience-time" class="text-subtitle-2 font-weight-medium text-wrap" data-aos="fade-left" style="color: #ADB5BD;">
              {{ exp.timeStart }} - {{ exp.timeEnd }}
            </v-label>
          </div>
        </template>
        <v-sheet
          class="mb-5 overflow-hidden"
          elevation="0"
          rounded="3"
          color="transparent"
        >
          <v-card-title class="pt-0 px-0 text-wrap" data-aos="fade-right">
            <h5 id="experience-job" class="text-h5 mb-1">{{ exp.job }}</h5>
            <h5 id="experience-company" class="text-subtitle-1 text-grey200 font-weight-medium font-italic">{{ exp.company }}</h5>
          </v-card-title>
          <v-card-text class="px-0 py-0 text-wrap">
            <p id="experience-description" class="text-body-1 font-weight-light mb-2" data-aos="fade-right">{{ exp.description }}</p>
            <div class="d-flex flex-wrap" data-aos="fade-right"> 
              <v-chip id="experience-skills" class="text-body-2 me-2 my-1" density="compact" v-for="skill in exp.skills">
                {{ skill }}
              </v-chip>
            </div>
          </v-card-text>
        </v-sheet>
      </v-timeline-item>
    </v-timeline>
  </v-sheet>
</template>

<script setup lang="ts">
import jobExperiences from '~/data/experiences'
</script>

<style lang="scss" scoped>
@media (max-width: 800px) {
  #timeline-experience {
    #experience-time {
      font-size: 10px !important;
    }

    #experience-job {
      font-size: 16px !important;
    }

    #experience-company, #experience-description {
      font-size: 12px !important;
    }

    #experience-skills {
      font-size: 10px !important;
    }
  }
}
</style>