<template>
  <v-dialog v-model="model" :width="width">
    <v-card elevation="10" class="rounded-3 overflow-visible">
      <v-card-item
        class="px-4 py-4 d-sm-flex align-center justify-space-between rounded-top-3 position-relative"
        :class="{ 'bg-background': title }"
      >
        <v-card-title class="text-h5 mb-0 d-flex align-center">
          {{ title }}
        </v-card-title>
        <v-btn class="top-0 end-0 m-3" density="compact" variant="plain" icon="mdi-window-close" position="absolute" @click="model = false"/>
      </v-card-item>
      <v-divider class="m-0" :class="{ 'd-none': !title }"/>
      <slot/>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
// Properties
const props = defineProps({
  title: {
    type: String,
    default: null
  },
  width: {
    type: String || Number || undefined,
    default: "600px"
  },
})

// Model
const model = defineModel<boolean>()
</script>