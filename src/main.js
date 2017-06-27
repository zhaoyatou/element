import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import cont1 from './components/content/content1/content.vue';
Vue.use(cont1);
import cont2 from './components/content/content2/content.vue';
Vue.use(cont2);
import cont3 from './components/content/content3/content.vue';
Vue.use(cont3);
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: cont1},
    {path: '/cont1', component: cont1},
    {path: '/cont2', component: cont2},
    {path: '/cont3', component: cont3}
  ]
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');

