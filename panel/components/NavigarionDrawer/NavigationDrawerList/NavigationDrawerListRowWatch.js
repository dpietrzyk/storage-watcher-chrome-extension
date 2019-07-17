import Channel from '../../../class/Channel.js';
import Store from '../../../vuex/Store.js';

const template = `
<v-list-tile-action class="custom-v-list-title-action">
    <v-btn flat
           icon
           @click.stop="Store.toggleChannelWatch(channel.name)">

        <v-icon v-if="channel.watch">
            visibility
        </v-icon>

        <v-icon v-else
                disabled>
            visibility_off
        </v-icon>

    </v-btn>
</v-list-tile-action>
`;

export default {
    template,
    props: {
        channel: {
            type: Channel,
            required: true,
        },
    },
    data: () => ({Store}),
};


