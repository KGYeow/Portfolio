<template>
  <v-card elevation="10" class="withbg" :class="class">
    <v-card-item class="pl-7 pt-6 pb-1" v-if="header">
      <div class="d-sm-flex align-center justify-space-between">
        <v-card-title class="text-h5 d-flex align-center">
				  <LayoutFullVerticalSidebarIcon class="me-3" :item="icon"/>
          {{ title }}
        </v-card-title>
      </div>
    </v-card-item>
    <v-card-text class="px-8 pt-4" :class="{ 'pb-4': footer, 'pb-6': !footer }">
      <div class="text-body-1">
        <slot/>
      </div>
    </v-card-text>
    <v-card-actions class="px-8 py-3 justify-content-end" v-if="footer">
      <slot name="action"></slot>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  class: String,
  icon: Object,
  header: { type: Boolean, default: true },
  footer: { type: Boolean, default: true },
});
</script>