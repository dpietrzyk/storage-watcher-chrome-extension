import Store from '../../vuex/Store.js';

const template = `
    <v-btn text
           icon
           @click="Store.toggleTheme()">
        <v-icon>
            mdi-invert-colors
        </v-icon>
    </v-btn>
`;

export default {
    template,
    data: () => ({Store}),
};

