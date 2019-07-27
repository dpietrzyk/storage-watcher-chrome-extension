import Channel from '../../../class/Channel.js';

const template = `
    <v-list-item-action>
        <v-switch
                @click.prevent=""
                v-model="channel.watch"/>
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
};


