import Color from '../../class/Color.js';
import Store from '../../vuex/Store.js';

const template = `
    <v-btn flat
           icon
           @click="clearAll()">
        <v-icon>
            clear_all
        </v-icon>
    </v-btn>
`;

export default {
    template,
    methods: {
        clearAll(){
            Store.clearAll();
            Color.reset();
        }
    }
};

