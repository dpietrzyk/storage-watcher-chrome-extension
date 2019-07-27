import ClearButton from './ClearButton.js';
import DrawerSwitcher from './DrawerSwitcher.js';
import SearchBar from './SearchBar.js';
import ThemeSwitcher from './ThemeSwitcher.js';

const template = `
<v-app-bar app
    :height="64">
    <!--            <router-link to="/foo">Go to Foo</router-link>-->
    <!--            <router-link to="/bar">Go to Bar</router-link>-->
    <v-app-bar-nav-icon>
        <DrawerSwitcher/>
    </v-app-bar-nav-icon>
    <v-toolbar-title>
        Storage Watcher
    </v-toolbar-title>
    
    <v-spacer/>
    
    <SearchBar v-if="false" class="search-bar"/>
    <ClearButton/>
    <ThemeSwitcher clipped-right/>
</v-app-bar>
`;

export default {
    template,
    components: {
        ThemeSwitcher,
        DrawerSwitcher,
        SearchBar,
        ClearButton,
    },
};
