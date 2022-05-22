import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import NotFound from '@/views/NotFound.vue'
// vue-router https://router.vuejs.org/zh/introduction.html
const routes: RouteRecordRaw[] = [
  {
    path: "/demo",
    component: () => import("@/views/demoview.vue"),
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});