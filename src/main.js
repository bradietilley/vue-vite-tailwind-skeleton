import './tailwind.css';

import { createApp } from "vue";
import Main from "./Main.vue";
import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import AltPage from './views/AltPage.vue';
import NewPage from './views/NewPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/alt-page',
            component: AltPage,
        },
        {
            path: '/new-page',
            component: NewPage,
        }
    ],
});

createApp(Main).use(router).mount("#app");
