import ClearButton from './ClearButton.js';
import DrawerSwitcher from './DrawerSwitcher.js';
import SearchBar from './SearchBar.js';
import ThemeSwitcher from './ThemeSwitcher.js';

const template = `
<v-toolbar app>
    <!--            <router-link to="/foo">Go to Foo</router-link>-->
    <!--            <router-link to="/bar">Go to Bar</router-link>-->
    <v-toolbar-side-icon>
        <DrawerSwitcher/>
    </v-toolbar-side-icon>
    <v-toolbar-title>
        IWC Watcher
    </v-toolbar-title>
    
    <v-spacer/>
    
    <SearchBar v-if="false" class="search-bar"/>
    <ClearButton/>
    <ThemeSwitcher clipped-right/>
</v-toolbar>
`;



export default {
    template,
    components: {
        ThemeSwitcher,
        DrawerSwitcher,
        SearchBar,
        ClearButton
    },
};
