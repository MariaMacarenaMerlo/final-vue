import "vuetify/styles"; //estilos de vuetify
import "@mdi/font/css/materialdesignicons.css"; //iconos de vuetify

import { createVuetify } from "vuetify";

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
  },
});

export default vuetify;
