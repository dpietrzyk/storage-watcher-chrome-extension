import App from './App.js';
import router from './router.js';
import store from './vuex.js';

const app = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
