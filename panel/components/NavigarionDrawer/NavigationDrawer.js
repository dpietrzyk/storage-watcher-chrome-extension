import NavigationDrawerHeader from './NavigationDrawerHeader.js';
import NavigationDrawerList from './NavigationDrawerList/NavigationDrawerList.js';

const template = `
    <v-navigation-drawer
        app
        disable-route-watcher
        width="400"
        v-model="$store.state.showDrawer">

        <NavigationDrawerHeader/>
        <v-divider/>
        <NavigationDrawerList/>

    </v-navigation-drawer>
`;

export default {
    template,
    components: {
        NavigationDrawerHeader,
        NavigationDrawerList,
    },
};


