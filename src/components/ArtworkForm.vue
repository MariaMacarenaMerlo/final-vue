<script>
export default {
  name: "ArtworkForm",
  props: {
    initialArtwork: {
      type: Object,
      default: null,
    },
  },
  emits: ["save"],
  data() {
    return {
      //el objeto lo recibo por props y sino creo uno nuevo
      artwork: this.initialArtwork
        ? { ...this.initialArtwork }
        : {
            title: "",
            artist: "",
            year: "",
            image: "",
            description: "",
          },
      selectedImage: null,
    };
  },
  //cambio el titulo del form en base a si estoy recibiendo una obra por props o no
  computed: {
    formTitle() {
      return this.initialArtwork ? "Editar obra" : "Agregar nueva obra";
    },
  },

  methods: {
    selectImage(event) {
      const file = event.target.files[0];

      if (file) {
        if (file.size > 500 * 1024) {
          alert("El tamaño del archivo excede el límite de 500 KB.");
          this.selectedImage = null;
          this.artwork.image = ""; // Limpiar el input
          return;
        }

        const reader = new FileReader();
        reader.onload = () => {
          this.artwork.image = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },

    requiredRule(inputForm) {
      const value = String(inputForm ?? "").trim(); //convierto el input en string, y si no hay un input usara un string "" y luego le digo que elimmine los espacios del principio y del final con .trim
      return !!value || "Este campo es obligatorio";
    },

    imageRule(inputFile) {
      const selectedFile = Array.isArray(inputFile) //
        ? inputFile.length > 0 //si esun array compruebo que tenga elementos
        : !!inputFile; //si no es un array entonces compruebo que el archivo exista.

      // La validación se aprueba si:
      // 1. La obra ya tiene una imagen guardada (caso edición), o
      // 2. El usuario seleccionó un archivo nuevo.
      // Si no se cumple ninguna condición, devuelve el mensaje de error.
      return (
        !!this.artwork.image || selectedFile || "La imagen es obligatoria" // OR devuelve el primer valor true que encuentra.
      );
    },

    async submitForm() {
      const result = await this.$refs.artworkForm.validate();
      if (!result.valid) {
        return;
      }
      this.$emit("save", { ...this.artwork });
    },
  },
};
</script>

<template>
  <h1 class="cormorant title-page text-center">{{ formTitle }}</h1>

  <section class="form">
    <h2 class="monospace">Datos de la obra</h2>
    <v-form @submit.prevent="submitForm" ref="artworkForm">
      <v-text-field
        label="Título de la obra"
        name="title"
        v-model="artwork.title"
        :rules="[requiredRule]"
      />
      <v-text-field
        label="Nombre del artista"
        name="artist"
        v-model="artwork.artist"
        :rules="[requiredRule]"
      />
      <v-text-field
        v-model="artwork.year"
        label="Año de creación"
        name="year"
        type="number"
        :rules="[requiredRule]"
      />
      <!-- si hay imagen el required es false -->
      <v-file-input
        label="Imagen de la obra"
        name="image"
        accept="image/jpeg, image/png, image/webp"
        @change="selectImage"
        hint="WebP, JPG o PNG. Máximo 500 KB. Recomendamos WebP."
        persistent-hint
        v-model="selectedImage"
        :rules="[imageRule]"
      />
      <v-textarea
        label="Descripción de la obra"
        name="description"
        v-model="artwork.description"
        rows="4"
      />
      <v-btn type="submit" class="btn-black btn-submit">Guardar obra</v-btn>
    </v-form>
  </section>
</template>
