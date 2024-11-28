<template>
  <!-- About Me -->
  <v-sheet class="d-flex flex-wrap align-end justify-space-between maxWidth bg-transparent">
    <v-sheet max-width="750" color="transparent">
      <!-- Name -->
      <h1 id="title-about" class="font-weight-black" style="font-size: 55px; scroll-margin-top: 90px">Yeow Kok Guan</h1>

      <!-- Title -->
      <h3 class="text-h3 mb-5">
        Fresh Graduate
      </h3>

      <!-- Description -->
      <p class="font-weight-light">
        A fresh graduate in Computer Science with a specialization in Intelligent Computing from Universiti Sains Malaysia (USM).
        During an internship at Sophic Automation Sdn Bhd, gained hands-on experience in full-stack web development,
        honing skills in modern frameworks and tools to create practical and user-focused solutions.
      </p>
      <p class="font-weight-light">
        Eager to continue learning and contributing to various projects in software engineering,
        with a focus on developing reliable and efficient applications.
        Alongside this, holds an interest in exploring intelligent computing to drive innovative and impactful solutions.
      </p>
    </v-sheet>

    <!-- Profile Photo -->
    <v-sheet color="transparent">
      <v-img
        rounded="3"
        :width="300"
        :aspect-ratio="9/10"
        cover
        :src="`${config.app.baseURL}images/KokGuan_AboutMe.jpg`"
      />
    </v-sheet>
  </v-sheet>
</template>

<script setup lang="ts">
// Data
const config = useRuntimeConfig()
</script>