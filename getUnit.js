export default function getUnit(value) {
    let length = value.length;

    if (!value || !length) {
        return null;
    }

    let i = length;

    while (i--) {
        if (!isNaN(value[i])) {
            return value.slice(i + 1, length) || null;
        }
    }

    return null;
}
