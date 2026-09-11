<!-- <AppAlert
      v-model="alertOpen"
      title="Eliminar Obra"
      message="¿Estás seguro de que quieres eliminar esta obra?"
      :show-actions="true"
      @confirm="confirmDelete"
      @cancel="cancelDelete"
    /> -->

<script>
export default {
  name: "AppAlert",
  props: {
    modelValue: {
      //se linkea con el v-model del padre.
      type: Boolean,
      default: false,
    },

    title: {
      type: String,
      default: "Aviso",
    },
    message: {
      type: String,
      required: true,
    },
    showActions: {
      type: Boolean,
      default: false,
    },
    confirmText: {
      type: String,
      default: "Confirmar",
    },
    cancelText: {
      type: String,
      default: "Cancelar",
    },
  },

  emits: [
    "update:modelValue", //para cerrar o abrir el alert
    "confirm", //para confirmar la acción
    "cancel", //para cancelar la acción
  ],

  methods: {
    closeAlert() {
      this.$emit("update:modelValue", false);
    },
    confirmAction() {
      this.$emit("confirm");
      this.closeAlert();
    },
    cancelAction() {
      this.$emit("cancel");
      this.closeAlert();
    },
  },
};
</script>
<template>
  <v-dialog :model-value="modelValue" max-width="500">
    <v-card>
      <v-card-title>{{ title }} </v-card-title>
      <v-card-text>{{ message }}</v-card-text>
      <v-card-actions v-if="showActions">
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="confirmAction"> {{ confirmText }}</v-btn>
        <v-btn color="secondary" @click="cancelAction"> {{ cancelText }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
