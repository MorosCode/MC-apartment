import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: () => import("@/views/home/home.vue") 
    },
    {
      path: "/morePage",
      component: () => import("@/views/morePage/morePage.vue") 
    },
    {
      path: "/detail/:id?",
      name:"detail",
      component: () => import("@/views/detail/detail.vue"),
      props: true  
    },

  ]
})

export default router