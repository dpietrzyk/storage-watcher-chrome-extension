import Channel from '../../../class/Channel.js';

const template = `
    <v-list-tile-action>
        <v-switch
                @click.prevent=""
                v-model="channel.watch"/>
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
};


