import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';

import Welcome from './components/Welcome';
import Students from './components/students/Index';
import NotFound from './components/NotFound';

import App from './App';

Vue.use(VueRouter);

window.axios = axios;

Vue.config.productionTip = false;

const router = new VueRouter({
    mode: 'history',

    routes: [
        {path: '/', component: Welcome, meta: {title: 'Dashboard'}},
        {path: '/students', component: Students, meta: {title: 'Students'}},
        {path: '*', component: NotFound, meta: {title: 'Not Found'}} //If no other routes match, trigger the 404 page
    ]
});

// Change page title based on meta.title tag from displayed route
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Test App';
    next();
});

// Render route
new Vue({
    router,
    render: h => h(App),
}).$mount('#app');