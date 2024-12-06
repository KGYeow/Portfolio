<template>
  <!-- Projects -->
  <v-sheet class="maxWidth bg-transparent">
    <!-- Title -->
    <h1 id="title-projects" class="font-weight-black mb-3 text-center" style="scroll-margin-top: 90px">Projects</h1>

    <!-- Project List -->
    <v-slide-group center-active show-arrows>
      <div class="d-flex flex-wrap justify-space-between w-100">
        <v-slide-group-item v-for="(item, i) in projects" :key="i">
          <!-- Project Card -->
          <v-card class="project-card mx-4 my-7" max-width="340" rounded="3" elevation="5" :href="item.link" target="_blank" color="card">
            <v-img class="align-end" height="160" :src="`${config.app.baseURL}${item.thumbnail}`" gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.75)" cover>
              <v-card-item class="pt-4 pb-3">
                <h5 class="text-h5 mb-1 text-white">{{ item.name }}</h5>
              </v-card-item>
              <v-icon class="display-open-new position-absolute top-0 end-0 m-2 text-white" icon="mdi-open-in-new" size="18px"/>
            </v-img>
            <v-card-text class="py-4">
              <p class="text-body-1 font-weight-light mb-2">{{ item.description }}</p>
              <div class="d-flex flex-wrap">
                <v-chip class="text-body-2 me-2 my-1" density="compact" v-for="skill in item.techStack">{{ skill }}</v-chip>
              </div>
            </v-card-text>
          </v-card>
        </v-slide-group-item>
      </div>
    </v-slide-group>
  </v-sheet>
</template>

<script setup lang="ts">
import projects from '~/data/projects'

// Data
const config = useRuntimeConfig()
</script>