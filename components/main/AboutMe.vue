<template>
  <!-- About Me -->
  <v-sheet class="maxWidth bg-transparent">
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
            data-aos="fade-right"
            cover
          />
        </v-col>
        <v-col cols="12" lg="8" md="8" sm="12">
          <!-- Title -->
          <h1 id="title-aboutme" class="font-weight-black mb-10" data-aos="fade-left">About Me</h1>

          <!-- Description -->
          <div id="aboutme-description">
            <p class="text-body-1 font-weight-light" data-aos="fade-left">
              <span class="text-h2 font-weight-bold">Hello!</span> I'm Yeow Kok Guan, a fresh graduate in Computer Science with a specialization in Intelligent Computing from Universiti Sains Malaysia (USM).
              During an internship, gained hands-on experience in full-stack web development,
              honing skills in modern frameworks and tools to create practical and user-focused solutions.
            </p>
            <p class="text-body-1 font-weight-light" data-aos="fade-left">
              Eager to continue learning and contributing to various projects in software engineering,
              with a focus on developing reliable and efficient applications.
              Alongside this, holds an interest in exploring intelligent computing, such as machine learning and data analytics, to drive innovative and impactful solutions.
            </p>
          </div>

          <v-list id="aboutme-info" class="text-body-1 font-weight-light mb-8" bg-color="transparent" density="compact" data-aos="fade-left">
            <v-list-item class="px-0" prepend-icon="mdi-email-outline">
              kokguan0819@gmail.com
            </v-list-item>
          </v-list>

          <!-- Social Media -->
          <div id="aboutme-socialmedia" class="d-flex" data-aos="fade-left">
            <div v-for="(item, i) in socialMedia" :key="i">
              <v-btn :class="{ 'ms-3': i != 0 }" density="compact" variant="plain" :icon="item.icon" :ripple="false" :href="item.link" target="_blank"/>
            </div>
          </div>
        </v-col>
      </v-row>
  </v-sheet>
</template>

<script setup lang="ts">
import socialMedia from '~/data/socialMedia'

// Data
const config = useRuntimeConfig()
</script>

<style lang="scss" scoped>
@media (max-width: 960px) {
  #aboutme-image {
    margin: auto !important;
    width: 250px !important;
    height: 250px !important;
  }

  #title-aboutme {
    text-align: center !important;
  }
}

@media (max-width: 800px) {
  #aboutme-description {
    margin-bottom: 0 !important;

    p {
      font-size: 12px !important;
    }
  }

  #aboutme-info {
    margin-bottom: 5px !important;
    padding-top: 0 !important;
    font-size: 12px !important;
  }

  #aboutme-socialmedia {
    .v-btn {
      font-size: smaller !important;
    }
  }
}
</style>