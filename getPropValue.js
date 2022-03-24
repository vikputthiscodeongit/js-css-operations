export default function getPropValue(el, prop) {
    const elStyles = window.getComputedStyle(el);
    const propValue = elStyles.getPropertyValue(prop)

    return propValue === "" ? null : propValue;
}
