import getUnit from "./getUnit.js";

export default function timeToMs(time) {
    const number = parseFloat(time);

    switch (getUnit(time)) {
        case null:
        case "ms":
            return number;

        case "s":
            return number * 1000;

        case "m":
            return number * 60000;

        case "h":
            return number * 3600000;

        case "d":
            return number * 86400000;

        case "w":
            return number * 604800000;

        case "y":
            return number * 31536000000;

        default:
            return null;
    }
}
