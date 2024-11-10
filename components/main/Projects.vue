<template>
  <!-- Projects -->
  <v-sheet class="maxWidth bg-transparent">
    <!-- Title -->
    <h1 class="font-weight-black mb-10 text-center">Projects</h1>

    <!-- Project List -->
    <v-data-iterator :items="projects" :items-per-page="3">
      <template #default="{ items, page, pageCount, prevPage, nextPage }">
        <div class="d-flex flex-wrap justify-space-between">
          <!-- Previous Button -->
          <v-btn
            class="my-auto"
            density="comfortable"
            icon="mdi-arrow-left"
            variant="tonal"
            :disabled="page == 1"
            rounded
            @click="prevPage"
          ></v-btn>

          <!-- Project Cards -->
          <v-card max-width="340" rounded="2" elevation="10" v-for="(item, i) in items" :key="i">
            <v-img class="align-end" height="160" :src="item.raw.thumbnail" gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.75)" cover>
              <v-card-item class="pt-4 pb-3">
                <h5 class="text-h5 mb-1 text-white">{{ item.raw.name }}</h5>
              </v-card-item>
            </v-img>
            <v-card-text class="py-4">
              <p class="text-body-1 font-weight-light mb-2">{{ item.raw.description }}</p>
              <div class="d-flex flex-wrap">
                <v-chip class="text-body-2 me-2 my-1" density="compact" v-for="skill in item.raw.techStack">{{ skill }}</v-chip>
              </div>
            </v-card-text>
          </v-card>

          <!-- Next Button -->
          <v-btn
            class="my-auto"
            density="comfortable"
            icon="mdi-arrow-right"
            variant="tonal"
            :disabled="page == pageCount"
            rounded
            @click="nextPage"
          ></v-btn>
        </div>
      </template>

      <!-- Display Page -->
      <template #footer="{ page, pageCount, prevPage, nextPage }">
        <div class="d-flex align-center justify-center pa-4">
          <div class="mx-2 text-caption">
            Page {{ page }} of {{ pageCount }}
          </div>
        </div>
      </template>
    </v-data-iterator>
  </v-sheet>
</template>

<script setup lang="ts">
import projects from '~/data/projects'
</script>