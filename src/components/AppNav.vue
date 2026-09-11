<script>
export default {
  name: "AppNav",
  data() {
    return {
      menuMobileVisible: false,
    };
  },
  methods: {
    toggleMenuMobile() {
      this.menuMobileVisible = !this.menuMobileVisible;
    },
    closeMenuMobile() {
      this.menuMobileVisible = false;
    },
  },
};
</script>

<template>
  <v-app-bar class="bg-black px-5">
    <v-app-bar-nav-icon
      @click="toggleMenuMobile"
      class="d-md-none"
    ></v-app-bar-nav-icon>
    <v-app-bar-title>Galeria de Arte</v-app-bar-title>
    <div class="d-none d-md-flex ga-2">
      <v-btn
        class="btn-black"
        to="/"
        :class="$route.path === '/' ? 'nav-active' : ''"
        >Inicio</v-btn
      >
      <v-btn
        to="/obras"
        :class="$route.path === '/obras' ? 'nav-active' : ''"
        class="btn-black"
        >Galería</v-btn
      >
      <v-btn
        to="/sobre-inspira-art"
        :class="$route.path === '/sobre-inspira-art' ? 'nav-active' : ''"
        class="btn-black"
        >Sobre inspira art</v-btn
      >
      <v-btn
        to="/obras/nueva"
        :class="$route.path === '/obras/nueva' ? 'nav-active' : ''"
        class="btn-black"
        >Agregar obra</v-btn
      >
    </div>
  </v-app-bar>
  <v-navigation-drawer
    v-model="menuMobileVisible"
    temporary
    class="d-md-none bg-black"
  >
    <v-list>
      <v-list-item
        to="/"
        @click="closeMenuMobile"
        :class="$route.path === '/' ? 'nav-active' : ''"
        class="nav-list-item"
        >Inicio</v-list-item
      >
      <v-list-item
        to="/obras"
        @click="closeMenuMobile"
        :class="$route.path === '/obras' ? 'nav-active' : ''"
        class="nav-list-item"
        >Galería</v-list-item
      >
      <v-list-item
        to="/obras/nueva"
        @click="closeMenuMobile"
        :class="$route.path === '/obras/nueva' ? 'nav-active' : ''"
        class="nav-list-item"
      >
        Agregar obra
      </v-list-item>
      <v-list-item
        to="/sobre-inspira-art"
        @click="closeMenuMobile"
        :class="$route.path === '/sobre-inspira-art' ? 'nav-active' : ''"
        class="nav-list-item"
      >
        Sobre Inspira Art
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
