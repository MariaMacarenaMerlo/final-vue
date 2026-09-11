<script>
import ArtWorkCard from "../components/ArtWorkCard.vue";
import AppAlert from "../components/AppAlert.vue";

import { getArtworks, deleteArtwork } from "../services/artworkService.js";

export default {
  name: "GalleryView",
  components: {
    ArtWorkCard,
    AppAlert,
  },
  data() {
    return {
      artworks: [],
      editMode: false,
      alertOpen: false,
      artworkToDeleteId: null, // Guarda el id de la obra que se quiere eliminar
    };
  },
  async mounted() {
    this.artworks = await getArtworks();
  },
  methods: {
    handleDeleteArtwork(id) {
      this.artworkToDeleteId = id;
      this.alertOpen = true; // Abre el alert

      // deleteArtwork(id);
      // this.artworks = getArtworks();
    },
    confirmDelete() {
      if (this.artworkToDeleteId !== null) {
        deleteArtwork(this.artworkToDeleteId);
        this.artworks = getArtworks();
        this.artworkToDeleteId = null; // Resetea el id después de eliminar
      }
    },
    cancelDelete() {
      this.artworkToDeleteId = null; // Resetea el id si se cancela
    },
  },
};
</script>
<template>
  <main>
    <section class="m-4rem">
      <div class="d-flex justify-space-between align-center gallery-header">
        <h1 class="cormorant title-page">Galería de obras</h1>
        <v-btn
          :class="editMode ? 'edit-mode-active' : 'edit-mode-inactive'"
          @click="editMode = !editMode"
          class="btn-black"
        >
          {{ editMode ? "Finalizar edición" : "Modo edición:" }}
        </v-btn>
      </div>
      <div v-if="artworks.length === 0">
        <p>No hay obras disponibles.</p>
        <!-- SUGERIR AGREGAR UNA OBRA -->
      </div>
      <div v-else class="artwork-grid">
        <ArtWorkCard
          v-for="artwork in artworks"
          :key="artwork.id"
          :artwork="artwork"
          :edit-mode="editMode"
          @delete="handleDeleteArtwork"
        />
      </div>
      <AppAlert
        v-model="alertOpen"
        title="Eliminar Obra"
        message="¿Estás seguro de que quieres eliminar esta obra?"
        :show-actions="true"
        @confirm="confirmDelete"
        @cancel="cancelDelete"
      />
    </section>
  </main>
</template>
