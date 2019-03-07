import Vue from 'vue';
import Router from 'vue-router';

import Main from './components/Main.vue';

function loadView(view: any) {
    return () => import(/* webpackChunkName: "view-[request]" */ `@/components/${view}.vue`)
}

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'main', component: Main },
    ]
});

export default router;

