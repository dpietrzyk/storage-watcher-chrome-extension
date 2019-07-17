export class IWC {
    static isIWCMessage(channelName) {
        return channelName.includes('IWC_DEFAULT');
    }

    static isIWCEbustMessage(channelName) {
        return channelName === 'IWC_DEFAULT_EBUS';
    }
}
