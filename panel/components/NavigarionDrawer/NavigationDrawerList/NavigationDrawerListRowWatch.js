import Channel from '../../../class/Channel.js';
import Store from '../../../vuex/Store.js';

const template = `
<v-list-item-action class="custom-v-list-title-action">
    <v-btn text
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
</v-list-item-action>
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


