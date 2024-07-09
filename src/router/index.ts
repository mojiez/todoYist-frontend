import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/main",
    name: "main",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MainView.vue"),

    // 定义嵌套路由
    children: [
      {
        path: "/add",
        name: "添加待办事项组件",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/AddToDo.vue"),
      },
      {
        path: "/today",
        name: "今日待办事项内容组件",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/TodayToDo.vue"),
      },
      {
        path: "/total",
        name: "全部待办事项内容组件",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/TotalToDo.vue"),
      },
      {
        path: "/expired",
        name: "过期待办事项内容组件",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/ExpiredToDo.vue"),
      },
      {
        path: "/daily",
        name: "每日待办事项内容组件",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/DailyToDo.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
