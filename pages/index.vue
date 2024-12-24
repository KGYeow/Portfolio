<template>
  <div>
    <v-parallax
      class="parallax-home"
      :src="`${config.app.baseURL}images/background/home-bg.jpg`"
      gradient="to right, rgba(0,0,0,.95), rgba(0,0,0,.5)"
      style="box-shadow: 0px 3px 5px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 5px 8px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 14px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12)) !important;"
    >
      <v-sheet
        id="section-home"
        class="section d-flex flex-column fill-height justify-center align-center"
        style="background-color: #11111180; min-height: calc(100vh - var(--v-layout-top))"
      >
        <p id="home-description" class="text-h3 font-weight-light">Hey there. I'm</p>
        
        <!-- Title -->
        <h1 id="home-title" class="font-weight-black mb-3" style="font-size: 65px;">Yeow Kok Guan</h1>

        <!-- Small Title -->
        <h3 id="home-small-title" class="text-h2">
          Fresh Graduate
        </h3>
      </v-sheet>
    </v-parallax>
    <v-sheet
      id="section-aboutme"
      class="section py-10 overflow-hidden"
      color="transparent"
      style="scroll-margin-top: var(--v-layout-top)"
    >
      <v-row class="mx-0">
        <v-col>
          <MainAboutMe/>
        </v-col>
      </v-row>
    </v-sheet>
    <v-sheet
      id="section-experiences"
      class="section py-10 overflow-hidden"
      elevation="5"
      color="section"
      style="scroll-margin-top: var(--v-layout-top)"
    >
      <v-row class="mx-0">
        <v-col>
          <MainJobExperiences/>
        </v-col>
      </v-row>
    </v-sheet>
    <v-sheet
      id="section-projects"
      class="section pt-10 pb-3 overflow-hidden"
      color="transparent"
      style="scroll-margin-top: var(--v-layout-top)"
    >
      <v-row class="mx-0">
        <v-col>
          <MainProjects/>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
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
  #section-home {
    text-align: center;
  }

  #home-description {
    font-size: 18px !important;
  }

  #home-title {
    font-size: 35px !important;
  }

  #home-small-title {
    font-size: 25px !important;
  }
}
</style>