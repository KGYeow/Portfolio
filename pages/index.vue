<template>
  <v-parallax
    class="parallax-aboutme m-0 p-0"
    :src="`${config.app.baseURL}images/background/aboutme-bg.jpg`"
    gradient="to right, rgba(0,0,0,.8), rgba(0,0,0,.25)"
  >
    <v-sheet id="section-aboutme" class="section pb-10 d-flex" style="padding-top: 40px; background-color: #11111180; height: calc(100vh - 80px);">
      <v-row class="mx-0 align-self-center">
        <v-col>
          <MainAboutMe/>
        </v-col>
      </v-row>
    </v-sheet>
  </v-parallax>
  <v-sheet id="section-experience" class="section py-10" elevation="5" color="section">
    <v-row class="mx-0">
      <v-col>
        <MainJobExperiences/>
      </v-col>
    </v-row>
  </v-sheet>
  <v-sheet id="section-projects" class="section pt-10 pb-3" color="transparent">
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

<style lang="scss" scoped>
@media (max-width: 800px) {
  #section-aboutme {
    padding-top: 40px !important;
  }
}
</style>