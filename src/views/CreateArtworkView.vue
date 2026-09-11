<script>
import ArtworkForm from "../components/ArtworkForm.vue";

import { createArtwork } from "../services/artworkService.js";

export default {
  name: "agregarObra",

  components: {
    ArtworkForm,
  },

  methods: {
    saveArtwork(artwork) {
      // Aquí puedes manejar el guardado de la obra, por ejemplo, enviando los datos a un servidor
      createArtwork(artwork);
      this.$router.push("/obras"); // Redirigir a la lista de obras después de guardar
    },
  },
};
</script>

<template>
  <main>
    <ArtworkForm @save="saveArtwork" />
  </main>
</template>
