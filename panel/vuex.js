import state from './vuex/state.js';
import getters from './vuex/getters.js';
import mutations from './vuex/mutations.js';

const store = new Vuex.Store({
    state,
    getters,
    mutations,
});

export default store;
