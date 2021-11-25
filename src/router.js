import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import { getAuth } from "firebase/auth";
const history = createWebHistory();

const routes = [
  {
    path: "/login",
    component: Login,
    meta: { requiresAuth: false },
  },
  {
    path: "/",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/log",
    component: () => import("./views/Log.vue"),
    meta: { requiresAuth: true },
  },
];
const router = createRouter({ history, routes });

router.beforeEach(async (to, from, next) => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (to.matched.every((route) => !route.meta.requiresAuth) || user) {
    next();
  } else {
    next("/login");
  }
});
export default router;
