import Store from '../../../vuex/Store.js';
import ListRowRibbon from '../../common/ListRowRibbon.js';
import NavigationDrawerListRowSwitch from './NavigationDrawerListRowSwitch.js';
import NavigationDrawerListRowSync from './NavigationDrawerListRowSync.js';
import NavigationDrawerListRowWatch from './NavigationDrawerListRowWatch.js';

const template = `
<transition-group
        tag="v-list"
        class="pt-0"
        dense
        two-line>

    <v-list-tile
            v-for="channel of $store.getters.sortedChannels"
            :key="channel.name"
            @click="Store.toggleChannelWatch(channel.name)">

        <ListRowRibbon
                :background-color="channel.color"/>

        <NavigationDrawerListRowWatch
                :channel="channel"/>

        <NavigationDrawerListRowSync
                :channel="channel"/>

        {{ channel.name }}

        <v-spacer/>

    </v-list-tile>

</transition-group>
`;

export default {
    template,
    components: {
        ListRowRibbon,
        NavigationDrawerListRowSync,
        NavigationDrawerListRowWatch,
        NavigationDrawerListRowSwitch,
    },
    data: () => ({Store}),
};


