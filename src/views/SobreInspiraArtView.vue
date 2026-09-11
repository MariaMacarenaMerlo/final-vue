<script>
export default {
  name: "SobreInspiraArtView",
};
</script>
<template>
  <section class="about-hero">
    <v-container fluid class="pa-0">
      <v-row no-gutters>
        <!-- Columna izquierda: contenido -->
        <v-col cols="12" md="7" class="about-hero-content">
          <h2 class="eyebrow">SOBRE INSPIRA ART</h2>
          <div class="eyebrow-line"></div>
          <h3 class="cormorant">Un espacio para descubrir el arte</h3>
          <p>
            Inspira Art es una galería digital que reúne una selección de obras
            y artistas de diferentes épocas y estilos. Un espacio pensado para
            explorar el arte de forma simple, visual y accesible.
          </p>
        </v-col>

        <!-- imagen -->
        <v-col cols="12" md="5" class="about-hero-image">
          <img
            src="../assets/images/sobre-inpira-hero.png.webp"
            alt="Obra de arte de la galería Inspira Art"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
  <section class="que-es-inspira">
    <v-container fluid>
      <v-row align="center">
        <!-- Logo -->
        <v-col cols="12" md="4" class="about-logo">
          <img
            src="../assets/images/logo-peque.png.webp"
            alt="Logo de Inspira Art"
          />
        </v-col>

        <!-- Contenido -->
        <v-col cols="12" md="8" class="about-info-content">
          <h2 class="eyebrow">¿QUÉ ES INSPIRA ART?</h2>

          <div class="eyebrow-line-beige"></div>

          <p>
            Inspira Art nace con la idea de acercar distintas expresiones
            artísticas a través de una experiencia digital sencilla.
          </p>

          <p>
            Cada obra forma parte de una colección que permite conocer artistas,
            descubrir nuevos estilos y recorrer diferentes formas de expresión
            visual.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
  <section>
    <v-container class="d-flex flex-column align-center como-funciona">
      <h2 class="eyebrow">¿Cómo funciona?</h2>
      <div class="eyebrow-line"></div>
      <v-row class="steps-row">
        <v-col cols="12" md="4" class="col-step">
          <span class="rounded-number monospace"> 01 </span>
          <v-icon icon="mdi-compass-outline" size="32"></v-icon>
          <h3 class="step-h3">EXPLORÁ</h3>
          <p>Recorré la galería y descubrí las obras disponibles.</p>
        </v-col>
        <v-col cols="12" md="4" class="col-step">
          <span class="rounded-number monospace"> 02 </span>
          <v-icon icon="mdi-eye-outline" size="32"></v-icon>
          <h3 class="step-h3">DESCUBRÍ</h3>
          <p>Conocé sus artistas, fechas y diferentes estilos artísticos.</p>
        </v-col>
        <v-col cols="12" md="4" class="col-step">
          <span class="rounded-number monospace"> 03 </span>
          <v-icon icon="mdi-lightbulb-outline" size="32"></v-icon>
          <h3 class="step-h3">INSPIRATE</h3>

          <p>Observá, explorá y encontrá nuevas formas de acercarte al arte.</p>
        </v-col>
      </v-row>
    </v-container>
  </section>
  <section class="quote-section">
    <v-container fluid class="pa-0">
      <v-row>
        <v-col cols="12" md="5" class="pa-0 image-col">
          <img
            src="../assets/images/women.png.webp"
            alt="pintura renacentista"
            class="renacentista"
          />
        </v-col>
        <v-col cols="12" md="5" class="quote-div">
          <p class="cormorant quote">
            El arte transforma la manera en que miramos el mundo.
          </p>
          <div class="eyebrow-line-beige"></div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
