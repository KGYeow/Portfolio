<template>
  <v-locale-provider >
    <v-app>
      <LayoutFullMain/>
      <v-main>
        <v-container fluid class="page-wrapper">
          <div class="">
            <NuxtPage/>
          </div>
        </v-container>
      </v-main>
    </v-app>
  </v-locale-provider>
</template>