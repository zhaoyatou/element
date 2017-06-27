import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// import health from './components/blind_person/health/heath.vue'
// Vue.use(health)
Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    // {path: '/', component: health}
  ]
});

/* eslint-disable no-new */
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');

