import Store from '../../vuex/Store.js';

const template = `
    <v-icon
        @click="Store.toggleDrawer()">
        menu
    </v-icon>
`;

export default {
    template,
    data: () => ({Store}),
};

