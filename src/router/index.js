import { createWebHashHistory, createRouter } from "vue-router";
import PageHome from "../views/PageHome.vue";
import PagePAStatus from "../views/PagePAStatus.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: PageHome,
  },
  {
    path: "/pa-status",
    name: "PAStatus",
    component: PagePAStatus,
  },
  {
    path: "/:catchAll(.*)",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;