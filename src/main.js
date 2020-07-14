import Vue from 'vue'
import App from './App.vue'
import VueScrollactive from 'vue-scrollactive';
import 'animate.css';



import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);




Vue.use(VueScrollactive);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
