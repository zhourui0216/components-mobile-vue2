import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: "/use_navbar",
        name: "use_navbar",
        component: () => import('../views/pages/use_navbar.vue')
    },
    {
        path: "/use_tabbar",
        name: "use_tabbar",
        component: () => import('../views/pages/use_tabbar.vue')
    },
    {
        path: "/use_swiper",
        name: "use_swiper",
        component: () => import('../views/pages/use_swiper.vue')
    },
    {
        path: "/use_index_list",
        name: "use_index_list",
        component: () => import('../views/pages/use_index_list.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router
