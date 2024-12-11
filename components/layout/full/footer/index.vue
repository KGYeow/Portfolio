<template>
  <v-row class="m-0">
    <v-col id="footer-content" class="m-0 px-10 py-6 d-flex flex-wrap-reverse justify-space-between">
      <div id="footer-copyright" class="text-body-1 align-self-center" style="flex: auto">
        Copyright © {{ new Date().getFullYear() }} <a flat variant="text" href="#" target="_self" class="pl-1 text-grey200 fw-bold">Yeow Kok Guan</a>. All Rights Reserved.
      </div>
      <div id="footer-socialmedia" class="d-flex justify-end" style="flex: none;">
        <div v-for="(item, i) in socialMedia" :key="i">
          <v-btn :class="{ 'ms-3': i != 0 }" class="text-body-1" density="compact" variant="plain" :icon="item.icon" :ripple="false" :href="item.link" target="_blank"/>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import socialMedia from '~/data/socialMedia'
</script>

<style lang="scss" scoped>
@media (max-width: 600px) {
  #footer-content {
    text-align: center !important;

    #footer-copyright {
      flex-basis: 100% !important;
    }

    #footer-socialmedia {
      flex-basis: 100% !important;
      justify-content: center !important;
      margin-inline: auto !important;
      margin-bottom: 12px !important;
    }
  }
}

@media (max-width: 800px) {
  #footer-content {
    padding-inline: 10px !important;
    
    #footer-copyright {
      font-size: 12px !important;
    }

    #footer-socialmedia {
      .v-btn {
        font-size: smaller !important;
      }
    }
  }
}
</style>