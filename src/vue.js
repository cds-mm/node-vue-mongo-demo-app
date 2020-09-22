import Vue from 'vue';
import VueRouter from 'vue-router';

import Welcome from './components/Welcome'
import Tasks from './components/Tasks'
import Students from './components/students/Index'

import App from './App';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
    mode: 'history',

    routes: [
        {path: '/', Welcome},
        {path: '/tasks', component: Tasks},
        {path: '/students', component: Students}
        // {path: '/student/:id', component: () => import('./components/students/Show')},
        // {path: '*', component: () => import('./NotFound')} //If no other routes match, trigger the 404 page
    ]
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')