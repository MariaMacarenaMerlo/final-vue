<script>
import LatestArtwork from "../components/home/LatestArtwork.vue";
import { getArtworks } from "../services/artworkService.js";
import heroArtwork from "../assets/images/hero.webp";

export default {
  name: "HomeView",
  components: {
    LatestArtwork,
  },
  data() {
    return {
      artworks: [],
      heroArtwork,
    };
  },
  mounted() {
    this.artworks = getArtworks();
  },
};
</script>

<template>
  <v-container fluid class="hero bg-black pa-0">
    <v-row no-gutters class="hero-row">
      <!-- Contenido -->
      <v-col
        cols="12"
        md="8"
        class="hero-content d-flex flex-column justify-center align-start"
      >
        <h1 class="eyebrow">GALERÍA DIGITAL</h1>
        <div class="eyebrow-line-beige" aria-hidden="true"></div>

        <img
          src="../assets/images/logo.png"
          alt="Inspira Art"
          class="hero-logo"
        />

        <p class="hero-description">
          Descubrí, compartí y gestioná obras de arte en una galería creada para
          inspirar.
        </p>

        <v-btn to="/obras" variant="outlined" class="btn-nobg">
          EXPLORAR LA GALERÍA →
        </v-btn>
      </v-col>

      <!-- Obra lateral -->
      <v-col cols="12" md="4" class="hero-image">
        <img :src="heroArtwork" alt="Pintura abstracta" class="hero-artwork" />
      </v-col>
    </v-row>
  </v-container>

  <section class="m-4rem">
    <LatestArtwork :artworks="artworks" />
  </section>

  <section class="bg-beige">
    <v-container fluid class="pa-0 p-md-1">
      <v-row>
        <v-col cols="12" md="6" class="sobreLaPlataforma">
          <h2 class="eyebrow">SOBRE LA PLATAFORMA</h2>
          <div class="eyebrow-line" aria-hidden="true"></div>
          <h3 class="cormorant big-title">¿Qué es Inspira Art?</h3>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="d-flex flex-column align-start ga-6 px-10 px-md-12 sobreLaPlataformaDcha"
        >
          <p>
            Inspira Art es una galería digital creada para descubrir, compartir
            y gestionar obras de arte. Permite explorar la colección, conocer
            información sobre cada obra y agregar, editar o eliminar piezas de
            manera sencilla.
          </p>
          <p>Explorá obras · Creá tu colección · Gestioná fácilmente</p>
          <v-btn to="/obras" class="btn-black">CONOCER LA COLECCIÓN →</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <section class="cta">
    <v-container fluid>
      <v-row class="m-4rem">
        <v-col cols="12" md="6">
          <h2 class="eyebrow">UNA INVITACIÓN A CREAR</h2>
          <div class="eyebrow-line-beige" aria-hidden="true"></div>
          <h3 class="cormorant">¿Querés sumar tu obra a la colección?</h3>
          <p>
            Compartí una pieza que merezca ser descubierta y hacela parte de la
            experiencia Inspira Art.
          </p>
          <v-btn class="btn-nobg">SUMAR MI OBRA →</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
