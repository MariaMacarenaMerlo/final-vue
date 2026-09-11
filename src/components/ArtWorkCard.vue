<!-- <ArtworkCard
        v-for="artwork in artworks"
        :key="artwork.id"
        :artwork="artwork"
        :edit-mode="editMode"
        @delete="handleDeleteArtwork"
      />
    -->

<script>
export default {
  name: "ArtworkCard",

  props: {
    artwork: {
      type: Object,
      required: true,
    },
    editMode: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["delete"],
  methods: {
    requestDeleteArtwork() {
      this.$emit("delete", this.artwork.id);
    },
    goToEditPage() {
      this.$router.push({
        name: "edit-artwork",
        params: { id: this.artwork.id },
      });
    },
  },
};
</script>

<template>
  <v-card class="artwork-card" color="#131414" elevation="0">
    <v-img :src="artwork.image" :alt="`Obra de arte de ${artwork.artist}`" />
    <v-card-title>{{ artwork.title }}</v-card-title>
    <v-card-subtitle>{{ artwork.artist }} - {{ artwork.year }}</v-card-subtitle>
    <v-card-text>{{ artwork.description }}</v-card-text>
    <v-card-actions class="d flex justify-space-between" v-if="editMode">
      <v-btn class="btn-nobg" @click="goToEditPage">Editar</v-btn>
      <v-btn class="btn-nobg" @click="requestDeleteArtwork"> Eliminar</v-btn>
    </v-card-actions>
  </v-card>
</template>
