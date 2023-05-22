import { createWebHistory, createRouter } from "vue-router";
import Login from "@/views/Login.vue";
import LineConnect from "@/views/LineConnect.vue";
import LineConnected from "@/views/LineConnected.vue";
import Home from "@/views/Home.vue";
import AddCash from "@/views/AddCash.vue";
import History from "@/views/History.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/line-connect",
    name: "LineConnect",
    component: LineConnect,
  },
  {
    path: "/line-connected",
    name: "LineConnected",
    component: LineConnected,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add-cash",
    name: "AddCash",
    component: AddCash,
  },
  {
    path: "/history",
    name: "History",
    component: History,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
