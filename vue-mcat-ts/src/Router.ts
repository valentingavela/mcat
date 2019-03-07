import Vue from 'vue';
import Router from 'vue-router';

function loadView(view: any) {
    return () => import(/* webpackChunkName: "view-[request]" */ `@/components/${view}.vue`)
}

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'main', component: loadView('Main') },
    ]
});

export default router;

