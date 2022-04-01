import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Admin from "./pages/Admin/Index.vue";
import Dashboard from "./pages/Admin/Dashboard.vue";
import New from "./pages/Admin/New.vue";
import Login from "./pages/Admin/Login.vue";
import Signup from "./pages/Admin/Signup.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  {
    path: "/admin",
    component: Admin,
    children: [
      { path: "", component: Dashboard },
      { path: "new", component: New },
      { path: "signup", component: Signup },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
