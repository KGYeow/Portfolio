<template>
  <!-- About Me -->
  <v-sheet class="py-8 d-flex flex-wrap align-end justify-space-between maxWidth bg-transparent">
    <v-sheet max-width="700" color="transparent">
      <!-- Name -->
      <h1 class="font-weight-black" style="font-size: 55px;">Yeow Kok Guan</h1>

      <!-- Title -->
      <h3 class="text-h3 mb-5">
        Fresh Graduate
      </h3>

      <!-- Description -->
      <p class="font-weight-light">
        As a recent graduate with a Bachelor's Degree in Computer Science specializing in Intelligent Computing from Universiti Sains Malaysia (USM),
        I am driven by a passion for developing innovative solutions and pushing the boundaries of technology.
        My experience as a Software Engineer intern at Sophic Automation Sdn Bhd allowed me to gain practical skills in full-stack web development
        and enhanced my ability to create efficient and user-focused applications.
      </p>
      <p class="font-weight-light">
        I am deeply committed to advancing my expertise in software engineering and intelligent computing.
        I am actively seeking an opportunity to contribute to a forward-thinking organization where I can leverage my skills.
        With a strong foundation in programming languages and frameworks, I am excited to bring my technical abilities and analytical mindset to a role that challenges me and fosters continuous growth.
      </p>
    </v-sheet>

    <!-- Profile Photo -->
    <v-sheet>
      <v-img
        :width="350"
        :aspect-ratio="1"
        cover
        src="/images/products/s11.jpg"
      />
    </v-sheet>
  </v-sheet>
</template>

<script setup lang="ts">
</script>