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
        As a recent graduate in Computer Science with a specialization in Intelligent Computing from Universiti Sains Malaysia (USM),
        I am passionate about creating innovative, technology-driven solutions.
        My internship as a Software Engineer at Sophic Automation Sdn Bhd gave me hands-on experience in full-stack web development,
        strengthening my skills in building efficient, user-focused applications.
        I am dedicated to advancing my expertise in software engineering and intelligent computing, and I am eager to contribute to a forward-thinking organization.
        With a solid foundation in programming, I look forward to taking on challenging roles that encourage growth and make an impact.
      </p>
    </v-sheet>

    <!-- Profile Photo -->
    <v-sheet>
      <v-img
        rounded="3"
        :width="300"
        :aspect-ratio="9/10"
        cover
        src="/images/KokGuan_AboutMe.jpg"
      />
    </v-sheet>
  </v-sheet>
</template>

<script setup lang="ts">
</script>