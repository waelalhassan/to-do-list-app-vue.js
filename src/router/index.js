import vue from "vue";
import vueRouter from "vue-router";
import inbox from "../views/inbox";
import completed from "../views/completed";

vue.use(vueRouter);

const routes = [
  {
    path: "/",
    name: "inbox",
    component: inbox
  },
  {
    path: "/completed",
    name: "completed",
    component: completed
  }
];

const router = new vueRouter({
  mode: "history",
  routes
});

export default router;