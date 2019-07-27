import MUTATION from './mutation.js';

export default class Store {
    static #storeRef;

    static set store(store) {
        this.#storeRef = store;
    }

    static addChannel(channelName) {
        if (this.#storeRef.state.sync &&
            !this.#storeRef.getters.channelsNames.includes(channelName)) {
            this.#storeRef.commit(MUTATION.ADD_CHANNEL, channelName);
            this.#storeRef.commit(MUTATION.SET_CHANNEL_COLOR, channelName);
        }
    }

    static addMessage(message) {
        if (this.#storeRef.state.sync &&
            this.#storeRef.getters.syncedChannelsNames.includes(message.channelName))
            this.#storeRef.commit(MUTATION.ADD_MESSAGE, message);
    }

    static clearMessages() {
        this.#storeRef.commit(MUTATION.CLEAR_MESSAGES);
    }

    static clearChannels() {
        this.#storeRef.commit(MUTATION.CLEAR_CHANNELS);
    }

    static clearAll() {
        this.clearMessages();
        this.clearChannels();
    }

    static getChannelColor(channelName) {
        return this.#storeRef.state.channelsColors.get(channelName);
    }

    static toggleChannelWatch(channelName) {
        this.#storeRef.commit(MUTATION.TOGGLE_CHANNEL_WATCH, channelName);
    }

    static toggleChannelSync(channelName) {
        if (!this.#storeRef.state.sync)
            this.toggleSync();

        this.#storeRef.commit(MUTATION.TOGGLE_CHANNEL_SYNC, channelName);
    }

    static toggleSync() {
        this.#storeRef.commit(MUTATION.TOGGLE_SYNC);
    }

    static toggleDrawer() {
        this.#storeRef.commit(MUTATION.TOGGLE_DRAWER);
    }

}
