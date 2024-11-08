<template>
	<!------Header-------->
	<v-app-bar class="px-10 py-0" height="80" color="primary" scroll-behavior="elevate">
    <v-app-bar-title class="m-0">
      <v-btn class="fw-bold" variant="plain" size="large" href="#" :ripple="false">
        <template #prepend>
          <v-avatar size="40" image="/images/users/avatar.jpg"/>
        </template>
        Yeow Kok Guan
      </v-btn>
    </v-app-bar-title>
    <div v-for="(item, i) in navbarItem">
      <v-btn class="fw-bold" variant="plain" size="large" href="#" :ripple="false">
        {{ item.title }}
      </v-btn>
    </div>
	</v-app-bar>
	<!------Footer-------->
	<v-footer :app="true" :absolute="true">
		<LayoutFullFooter/>
	</v-footer>
</template>

<script setup>
import navbarItem from '@/data/navbarItem'

// Data
</script>