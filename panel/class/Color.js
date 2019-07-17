export default class Color {
    static #usedColors = [];

    static get randomHex() {
        return `#${((1 << 24) * Math.random() | 0).toString(16)}`;
    }

    static get uniqueRandomHex() {
        let randomHex = this.randomHex;

        while (this.#usedColors.includes(randomHex))
            randomHex = this.randomHex;

        this.#usedColors.push(randomHex);
        return randomHex;
    }

    static reset() {
        this.#usedColors = [];
    }
}
