<template>
  <!-- About Me -->
  <v-sheet class="maxWidth bg-transparent">
    <!-- Title -->
    <h1 id="title-aboutme" class="font-weight-black mb-10 text-center" style="scroll-margin-top: 90px">About Me</h1>

    <v-sheet class="d-flex" color="transparent">
      <v-row>
        <v-col cols="12" lg="4" md="4" sm="12">
          <!-- About Me Image -->
          <v-img
            id="aboutme-image"
            :src="`${config.app.baseURL}images/KokGuan_AboutMe.jpg`"
            rounded="1"
            :aspect-ratio="3/4"
            width="320"
            alt="Yeow Kok Guan"
            cover
          />
        </v-col>
        <v-col cols="12" lg="8" md="8" sm="12">
          <!-- Description -->
          <div id="aboutme-description">
            <p class="text-body-1 font-weight-light">
              Hello! I'm Yeow Kok Guan, a fresh graduate in Computer Science with a specialization in Intelligent Computing from Universiti Sains Malaysia (USM).
              During an internship, gained hands-on experience in full-stack web development,
              honing skills in modern frameworks and tools to create practical and user-focused solutions.
            </p>
            <p class="text-body-1 font-weight-light">
              Eager to continue learning and contributing to various projects in software engineering,
              with a focus on developing reliable and efficient applications.
              Alongside this, holds an interest in exploring intelligent computing to drive innovative and impactful solutions.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-sheet>
  </v-sheet>
</template>

<script setup lang="ts">
// Data
const config = useRuntimeConfig()
</script>

<style lang="scss">
@media (max-width: 800px) {
  #aboutme-image {
    margin: auto !important;
    width: 250px !important;
    height: 250px !important;
  }

  #aboutme-description {
    p {
      font-size: 12px !important;
    }
  }
}
</style>