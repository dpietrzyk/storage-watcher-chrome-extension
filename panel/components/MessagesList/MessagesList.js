import {InspectedWindow} from '../../class/InspectedWindow.js';
import Store from '../../vuex/Store.js';
import ListRowRibbon from '../common/ListRowRibbon.js';

const template = `
<v-list expand
        class="pa-0">
    <template v-for="message in $store.getters.watchedMessages">
    
        <v-list-tile class="list-item"
                :key="message.key"
                avatar
                @click="InspectedWindow.console.log(message.valueToDisplay)">

            <ListRowRibbon
                    :background-color="Store.getChannelColor(message.channelName)"/>

            <v-list-tile-action>
                <v-icon v-if="message.fromHome"
                        size="16">
                    home
                </v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
                <span class="message-list-timestamp">
                    {{ convertToTime(message.timestamp) }}
                </span>
                <v-list-tile-title v-text="message.valueToDisplay"></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-avatar>
                <!--            <img :src="item.avatar">-->
            </v-list-tile-avatar>
        </v-list-tile>
           
        <v-divider/>

    </template>
</v-list>
`;


export default {
    template,
    components: {
        ListRowRibbon,
    },
    data: () => ({Store, InspectedWindow}),
    methods: {
        convertToTime(timestamp) {
            const date = new Date(timestamp);
            const hours = date.getHours();
            const minutes = '0' + date.getMinutes();
            const seconds = '0' + date.getSeconds();

            return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        },
    },
};
