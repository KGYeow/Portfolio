<template>
	<!------Header-------->
	<v-app-bar class="px-10 py-0" height="80" color="topbar" scroll-behavior="elevate">
    <v-app-bar-title class="m-0">
      <v-btn class="fw-bold" variant="plain" size="large" href="#" :ripple="false">
        <template #prepend>
          <v-avatar size="40" :image="`${config.app.baseURL}images/KokGuan_Avatar.jpg`"/>
        </template>
        Yeow Kok Guan
      </v-btn>
    </v-app-bar-title>
    <div v-for="(item, i) in navbarItem">
      <v-btn class="fw-bold" variant="plain" size="large" :href="`${config.app.baseURL}${item.to}`" :ripple="false" tag="a">
        {{ item.title }}
      </v-btn>
    </div>
	</v-app-bar>
	<!------Footer-------->
	<v-footer :app="true" :absolute="true" color="footer">
		<LayoutFullFooter/>
	</v-footer>
</template>

<script setup>
import navbarItem from '@/data/navbarItem'

// Data
const config = useRuntimeConfig()
</script>