export default function motionAllowed() {
    return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
