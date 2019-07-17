import Color from './Color.js';
import {IWC} from './IWC.js';

export default class Channel {
    watch;
    sync;

    #name;
    #color;

    constructor(name, watch = false, sync = true) {
        this.#name = name;
        this.#color = Color.uniqueRandomHex;
        this.watch = watch || IWC.isIWCEbustMessage(name);
        this.sync = sync || IWC.isIWCEbustMessage(name);
    }

    get name() {
        return this.#name;
    }

    get color() {
        return this.#color;
    }

}
