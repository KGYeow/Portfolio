<template>
  <!------Sidebar-------->
  <v-navigation-drawer v-model="drawer" location="right" temporary color="background">
    <v-list-item class="pt-6 pb-3">
      <div class="d-flex flex-column align-center">
        <v-avatar class="mb-2" size="60" :image="`${config.app.baseURL}images/KokGuan_Avatar.jpg`"/>
        <span class="text-h5">Yeow Kok Guan</span>
        <span class="text-caption font-weight-light text-secondary">Fresh Graduate</span>
      </div>
    </v-list-item>
    <v-divider class="my-1" opacity="0"/>
    <v-list density="comfortable" nav>
      <v-list-item
        class="fw-bold text-body-1"
        :prepend-icon="item.icon + ' me-3'"
        v-for="(item, i) in navbarItem"
        :href="`${config.app.baseURL}${item.to}`"
      >
        {{ item.title }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
	<!------Header-------->
	<v-app-bar class="px-10 py-0" :height="browserWidth >= 800 ? 80 : 60" color="topbar" scroll-behavior="elevate">
    <v-app-bar-title class="m-0">
      <v-btn id="navbar-home" class="fw-bold p-0 mx-5" variant="plain" size="large" href="#" :ripple="false" v-if="browserWidth > 800">
        <v-avatar size="40" :image="`${config.app.baseURL}images/KokGuan_Avatar.jpg`"/>
        <span id="navbar-home-name" class="ms-3">Yeow Kok Guan</span>
      </v-btn>
      <v-btn id="navbar-home-avatar" variant="plain" href="#" :ripple="false" icon v-else="browserWidth <= 800">
        <v-avatar size="30" :image="`${config.app.baseURL}images/KokGuan_Avatar.jpg`"/>
      </v-btn>
    </v-app-bar-title>
    <div id="navbar-items" v-for="(item, i) in navbarItem">
      <v-btn class="fw-bold" variant="plain" size="large" :href="`${config.app.baseURL}${item.to}`" :ripple="false" tag="a">
        {{ item.title }}
      </v-btn>
    </div>
    <v-app-bar-nav-icon class="d-none m-0" variant="plain" size="small" :ripple="false" @click="drawer = !drawer"/>
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
const browserWidth = ref(window.innerWidth)
const drawer = ref(false)

// Window Resize
window.onresize = () => {
  browserWidth.value = window.innerWidth
}
</script>

<style lang="scss" scoped>
@media (max-width: 600px) {
  .v-app-bar {
    padding-left: 6px !important;

    #navbar-home-avatar {
      margin-left: 0 !important;
    }

    #navbar-items {
      display: none !important;
    }
  
    .v-app-bar-nav-icon {
      display: block !important;
    }
  }
}

@media (max-width: 800px) {
  .v-app-bar {
    padding-inline: 14px !important;

    #navbar-home-avatar {
      margin-left: 16px;
    }

    #navbar-items {
      .v-btn {
        font-size: smaller !important;
      }
    }
  }
}
</style>