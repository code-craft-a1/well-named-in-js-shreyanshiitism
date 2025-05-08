class ColorPair {
    constructor() {
        this.majorColor = null;
        this.minorColor = null;
    }

    toString() {
        return `MajorColor:${this.majorColor},MinorColr:${this.minorColor}`;
    }
}

module.exports = ColorPair; 