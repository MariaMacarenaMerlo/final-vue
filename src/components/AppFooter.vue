<script>
export default {
  name: "AppFooter",
};
</script>

<template>
  <footer class="footer">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6">
          <img
            src="../assets/images/logo.png"
            alt="Inspira Art"
            class="footer-logo"
          />
        </v-col>

        <v-col cols="12" md="6">
          <nav aria-label="Navegación del pie de página">
            <ul class="footer-links">
              <li><RouterLink to="/">Inicio</RouterLink></li>
              <li><RouterLink to="/obras">Galería</RouterLink></li>
              <li><RouterLink to="/agregar">Agregar obra</RouterLink></li>
              <li>
                <RouterLink to="/sobre-inspira-art"
                  >Sobre Inspira Art</RouterLink
                >
              </li>
            </ul>
          </nav>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>
