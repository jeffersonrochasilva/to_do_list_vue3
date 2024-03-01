// Composables
import { createRouter, createWebHistory } from "vue-router";
import OQuantoAntes from "@/pages/registers/OQuantoAntes.vue";
import SeSobrarTempo from "@/pages/registers/SeSobrarTempo.vue";
import Urgentemente from "@/pages/registers/Urgentemente.vue";
import ActivitiesCheck from "@/pages/ActivitiesCheck.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/pages/Home.vue"),
    children: [
      {
        path: "",
        name: "urgentemente",
        component: Urgentemente,
      },
      {
        path: "oquantoantes",
        name: "OQuantoAntes",
        component: OQuantoAntes,
      },
      {
        path: "sesobrartempo",
        name: "SeSobrarTempo",
        component: SeSobrarTempo,
      },
      {
        path: "activitiescheck",
        name: "ActivitiesCheck",
        component: ActivitiesCheck,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
