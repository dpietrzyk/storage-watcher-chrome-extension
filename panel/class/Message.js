import {IWC} from './IWC.js';

export default class Message {
    #channelName;
    #value;
    #origin;
    #isIWC;
    #isEbusIWC;
    #timestamp;
    #key;
    #fromHome;

    static isFromHome(origin) {
        return origin = window.location.href;
    }

    static get uniqueKey() {
        return new Date().valueOf();
    }

    constructor(rawMessage) {
        // TODO: add data validator
        this.#channelName = rawMessage.key;
        this.#value = rawMessage.newValue;
        this.#origin = rawMessage.url;
        this.#isIWC = IWC.isIWCMessage(this.#channelName);
        this.#isEbusIWC = IWC.isIWCEbustMessage(this.#channelName);
        this.#timestamp = Date.now();
        this.#key = Message.uniqueKey;
        this.#fromHome = Message.isFromHome(this.#origin);
    }

    get isIWC() {
        return this.#isIWC;
    }

    get channelName() {
        return this.#channelName;
    }

    get valueToDisplay() {
        return this.#isEbusIWC ?
            this.iwcShortValue :
            this.value;
    }

    get value() {
        return this.#value;
    }

    get iwcShortValue() {
        return JSON.parse(this.value).args;
    }

    get timestamp() {
        return this.#timestamp;
    }

    get fromHome() {
        return this.#fromHome;
    }

}
