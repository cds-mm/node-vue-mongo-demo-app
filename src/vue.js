import Vue from 'vue';
import VueRouter from 'vue-router';

import Welcome from './components/Welcome'
import Tasks from './components/Tasks'

import App from './App';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
    mode: 'history',

    routes: [
        {path: '/', Welcome},
        {path: '/tasks', component: Tasks},
    ]
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')