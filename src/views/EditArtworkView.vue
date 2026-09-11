<script>
import ArtworkForm from "../components/ArtworkForm.vue";

import { getArtworks, updateArtwork } from "../services/artworkService";

export default {
  name: "EditArtworkView",
  components: {
    ArtworkForm,
  },
  data() {
    return {
      artwork: null,
    };
  },
  methods: {
    saveChanges(updatedArtwork) {
      updateArtwork(this.artwork.id, updatedArtwork);
      this.$router.push("/obras");
    },
  },
  created() {
    const id = Number(this.$route.params.id);
    this.artwork = getArtworks().find((artwork) => artwork.id === id);
  },
};
</script>
<template>
  <main>
    <ArtworkForm
      v-if="artwork"
      :initial-artwork="artwork"
      @save="saveChanges"
    />
    <p v-else>No se encontró la obra de arte.</p>
  </main>
</template>
