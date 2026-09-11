import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import GalleryView from "../views/GalleryView.vue";
import CreateArtworkView from "../views/CreateArtworkView.vue";
import EditArtworkView from "../views/EditArtworkView.vue";
import SobreInspiraArtView from "../views/SobreInspiraArtView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //import.meta.env.BASE_URL toma el base configurado por Vite.
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/obras",
      name: "gallery",
      component: GalleryView,
    },
    {
      path: "/obras/nueva",
      name: "create-artwork",
      component: CreateArtworkView,
    },
    {
      path: "/obras/:id/editar",
      name: "edit-artwork",
      component: EditArtworkView,
    },
    {
      path: "/sobre-inspira-art",
      name: "sobre-inspira-art",
      component: SobreInspiraArtView,
    },
  ],
});

export default router;
