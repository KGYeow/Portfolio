<template>
  <v-sheet class="py-10" color="transparent">
    <v-row>
      <v-col>
        <MainAboutMe/>
      </v-col>
    </v-row>
  </v-sheet>
  <v-sheet class="pt-10 pb-5" elevation="10">
    <v-row>
      <v-col>
        <MainJobExperiences/>
      </v-col>
    </v-row>
  </v-sheet>
  <v-sheet class="pt-10 pb-3" color="transparent">
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