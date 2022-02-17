import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)




const routes = [
    { path: '/home', name: 'home', component: Home },
    { path: '/skills', name: 'skills', component: Skills },
    { path: '/experience', name: 'experience', component: Experience },

];

const router = new VueRouter({ routes });

new Vue({
    vuetify,
    router,
    //default route
    mounted() {
        router.replace({ name: 'home' })
    },
    render: h => h(App)
}).$mount('#app')