<template>
  <!-- Projects -->
  <v-sheet class="maxWidth bg-transparent">
    <!-- Title -->
    <h1 id="title-projects" class="font-weight-black mb-10 text-center" style="scroll-margin-top: 90px">Projects</h1>

    <!-- Project List -->
    <v-data-iterator id="iterator-projects" :items="projects" :page="currentPage" :items-per-page="3">
      <template #default="{ items }">
        <v-row class="mb-3">
          <v-col cols="12" lg="4" md="4" sm="12" v-for="(item, i) in items">
            <v-card class="project-card h-100 w-100" rounded="1" elevation="5" :href="item.raw.link" target="_blank" color="card">
              <v-img
                id="project-image"
                class="align-end"
                height="150px"
                :src="`${config.app.baseURL}${item.raw.thumbnail}`"
                gradient="to bottom left, rgba(0,0,0,.65), rgba(0,0,0,.95)"
                cover
              >
                <v-card-item class="pt-4 pb-3">
                  <h6 id="project-name" class="text-h6 mb-1 text-white">{{ item.raw.name }}</h6>
                </v-card-item>
                <v-icon class="display-open-new position-absolute top-0 end-0 m-2 text-white" icon="mdi-open-in-new" size="18px"/>
              </v-img>
              <v-card-text class="py-4">
                <p id="project-description" class="text-body-1 font-weight-light mb-2">{{ item.raw.description }}</p>
                <div id="project-skill" class="d-flex flex-wrap">
                  <v-chip class="text-body-2 me-2 my-1" density="compact" v-for="skill in item.raw.techStack">{{ skill }}</v-chip>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </template>
      <template #footer="{ pageCount }">
        <v-pagination id="iterator-projects-pagination" class="text-body-1" density="comfortable" rounded="1" v-model="currentPage" :length="pageCount"/>
      </template>
    </v-data-iterator>
  </v-sheet>
</template>

<script setup lang="ts">
import projects from '~/data/projects'

// Data
const config = useRuntimeConfig()
const currentPage = ref(1)
</script>

<style lang="scss" scoped>
@media (max-width: 800px) {
  #project-image {
    height: 140px !important;
  }

  #project-name {
    font-size: 14px !important;
  }

  #project-description {
    font-size: 12px !important;
  }

  #project-skill {
    .v-chip {
      height: 20px !important;
      font-size: 10px !important;
    }
  }
}
</style>