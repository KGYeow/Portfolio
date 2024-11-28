<template>
  <v-sheet class="section py-10" color="transparent">
    <v-row>
      <v-col>
        <MainAboutMe/>
      </v-col>
    </v-row>
  </v-sheet>
  <v-sheet class="section pt-10 pb-5" elevation="5" color="section">
    <v-row>
      <v-col>
        <MainJobExperiences/>
      </v-col>
    </v-row>
  </v-sheet>
  <v-sheet class="section pt-10 pb-3" color="transparent">
    <v-row>
      <v-col>
        <MainProjects/>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup>
// Head
useHead({
  title: "Yeow Kok Guan",
})
</script>