import Message from './class/Message.js';
import MessageGenerator from './class/MessageGenerator.js';
import NavigationDrawer from './components/NavigarionDrawer/NavigationDrawer.js';
import Toolbar from './components/Toolbar/Toolbar.js';
import Store from './vuex/Store.js';

const template = `
    <v-app>
        <NavigationDrawer/>
        <Toolbar/>
        <v-content>
            <v-container fluid>
                <router-view/>
            </v-container>
        </v-content>
    </v-app>
`;

export default {
    template,
    components: {
        Toolbar,
        NavigationDrawer,
    },
    data: () => ({
        messagesChannel: new BroadcastChannel('messs'),
    }),
    created() {
        Store.store = this.$store;
        this.subscribeToIncomingMessages();

        // for (let i = 0; i < 100; i++) {
        //     this.onNewMessage(MessageGenerator.IWCEvent);
        //     this.onNewMessage(MessageGenerator.IWCDefault);
        // }
        //
        // setInterval(() => {
        //     this.onNewMessage(MessageGenerator.IWCEvent);
        //     this.onNewMessage(MessageGenerator.IWCDefault);
        // }, 1000);


    },
    methods: {
        subscribeToIncomingMessages() {
            this.messagesChannel.onmessage = e => this.onNewMessage(e.data);
        },

        onNewMessage(rawMessage) {
            const message = new Message(rawMessage);

            Store.addChannel(message.channelName);
            Store.addMessage(message);
        },
    },
};

