<script>
import ArtworkCard from "../ArtWorkCard.vue";

export default {
  name: "LatestArtwork",
  components: { ArtworkCard },
  props: {
    artworks: {
      type: Array,
      required: true,
    },
  },

  computed: {
    latestArtworks() {
      return this.artworks.slice(-3);
    },
  },
};
</script>
<template>
  <v-container fluid class="d-flex flex-column align-center">
    <h2 class="eyebrow">SELECCIÓN RECIENTE</h2>
    <div class="eyebrow-line" aria-hidden="true"></div>
    <h3 class="cormorant pb-4">Últimas obras añadidas</h3>

    <v-row class="artwork-grid pt-4">
      <ArtworkCard
        v-for="artwork in latestArtworks"
        :key="artwork.id"
        :artwork="artwork"
      />
    </v-row>
  </v-container>
</template>
