<script>
import AppNav from "./components/AppNav.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppNav,
    AppFooter,
  },
};
</script>

<template>
  <v-app>
    <AppNav />
    <v-main>
      <RouterView />
    </v-main>
    <AppFooter />
  </v-app>
</template>
