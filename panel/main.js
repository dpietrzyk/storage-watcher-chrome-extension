import App from './App.js';
import vuetify from './plugins/vuetify.js';
import router from './plugins/router.js';
import store from './plugins/vuex.js';

const app = new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
}).$mount('#app');
