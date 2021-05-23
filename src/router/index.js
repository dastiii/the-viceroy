import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home")
  },
  {
    path: "/benefits",
    name: "benefits",
    component: () =>
      import(/* webpackChunkName: "benefits" */ "../views/Benefits")
  },
  {
    path: "/vehicles",
    name: "vehicles",
    component: () =>
      import(/* webpackChunkName: "vehicles" */ "../views/Vehicles")
  },
  {
    path: "/mealplan",
    component: () =>
      import(/* webpackChunkName: "mealplan" */ "../views/Mealplan"),
    children: [
      {
        path: "/mealplan/:week",
        name: "mealplan.forWeek",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "mealplan-week" */ "../views/mealplan/Week"
          )
      },
      {
        path: "",
        name: "mealplan",
        redirect: {
          name: "mealplan.forWeek",
          params: { week: "this-week" }
        }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
