import Channel from '../class/Channel.js';
import MUTATION from './mutation.js';

export default {
    [`${MUTATION.TOGGLE_THEME}`](state) {
        state.darkTheme = !state.darkTheme;
    },

    [`${MUTATION.TOGGLE_DRAWER}`](state) {
        state.showDrawer = !state.showDrawer;
    },

    [`${MUTATION.TOGGLE_SYNC}`](state) {
        state.sync = !state.sync;
    },

    /* CHANNELS */
    [`${MUTATION.ADD_CHANNEL}`](state, channelName) {
        state.channels.push(new Channel(channelName));
    },

    [`${MUTATION.SET_CHANNEL_COLOR}`](state, channelName) {
        const channel = state.channels.find(channel => channel.name === channelName);
        state.channelsColors.set(channel.name, channel.color);
    },

    [`${MUTATION.TOGGLE_CHANNEL_WATCH}`](state, channelName) {
        const index = state.channels.findIndex(channel => channel.name === channelName);
        state.channels[index].watch = !state.channels[index].watch;
    },

    [`${MUTATION.TOGGLE_CHANNEL_SYNC}`](state, channelName) {
        const index = state.channels.findIndex(channel => channel.name === channelName);
        state.channels[index].sync = !state.channels[index].sync;
    },

    [`${MUTATION.CLEAR_CHANNELS}`](state) {
        state.channels = [];
        state.channelsColors.clear();
    },

    /* MESSAGES */
    [`${MUTATION.ADD_MESSAGE}`](state, message) {
        state.messages.unshift(message);
        if (state.messages.length > state.messagesHistory) {
            state.messages.pop();
        }
    },

    [`${MUTATION.CLEAR_MESSAGES}`](state) {
        state.messages = [];
    },
};

