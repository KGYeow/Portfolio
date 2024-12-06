<template>
  <v-parallax
    class="parallax-aboutme m-0 p-0"
    :src="`${config.app.baseURL}images/background/aboutme-bg.jpg`"
    gradient="to right, rgba(0,0,0,.8), rgba(0,0,0,.2)"
  >
    <v-sheet class="section pb-10" style="padding-top: 80px; background-color: #11111180;">
      <v-row class="mx-0">
        <v-col>
          <MainAboutMe/>
        </v-col>
      </v-row>
    </v-sheet>
  </v-parallax>
  <v-sheet class="section py-10" elevation="5" color="section">
    <v-row class="mx-0">
      <v-col>
        <MainJobExperiences/>
      </v-col>
    </v-row>
  </v-sheet>
  <v-sheet class="section pt-10 pb-3" color="transparent">
    <v-row class="mx-0">
      <v-col>
        <MainProjects/>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup>
// Data
const config = useRuntimeConfig()

// Head
useHead({
  title: "Yeow Kok Guan",
})
</script>