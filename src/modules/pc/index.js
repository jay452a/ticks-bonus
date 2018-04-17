import Vue from 'vue';
import ElementUI from 'element-ui';

import store from 'vuexs/pc';
import router from 'routes/pc';
import 'styles/theme/index.css';
import 'styles/style.css';
import 'styles/element-variables.scss';

import App from './App';

Vue.use(ElementUI);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
