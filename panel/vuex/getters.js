export default {

    channelsNames: state => state.channels
        .map(channel => channel.name),

    sortedChannels: state => state.channels
        .sort((a, b) => {
            let cmp = b.watch - a.watch;
            if (cmp) return cmp;

            cmp = b.sync - a.sync;
            if (cmp) return cmp;

            return a.name.localeCompare(b.name);
        }),

    watchedChannelsNames: state => state.channels
        .filter(channel => channel.watch)
        .map(channel => channel.name),

    syncedChannelsNames: state => state.channels
        .filter(channel => channel.sync)
        .map(channel => channel.name),

    watchedMessages: (state, getters) => state.messages
        .filter(
            ({channelName}) => getters.watchedChannelsNames.includes(channelName),
        ),

};
