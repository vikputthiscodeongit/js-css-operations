import getUnit from "./getUnit";
import timeToMs from "./timeToMs";

test("get units", () => {
    expect(getUnit("1px")).toBe("px");
    expect(getUnit("1042em")).toBe("em");
    expect(getUnit("99%")).toBe("%");
    expect(getUnit("75.10kHz")).toBe("kHz");
    expect(getUnit(".5s")).toBe("s");
    expect(getUnit("100rem")).toBe("rem");
    expect(getUnit("auto")).toBe(null);
    expect(getUnit("1000")).toBe(null);
    expect(getUnit("0.12")).toBe(null);
    expect(getUnit("-.8")).toBe(null);
});

test("covert time to milliseconds", () => {
    expect(timeToMs("10ms")).toBe(10);
    expect(timeToMs("100s")).toBe(100000);
    expect(timeToMs("1m")).toBe(60000);
    expect(timeToMs("2h")).toBe(7200000);
    expect(timeToMs("4d")).toBe(345600000);
    expect(timeToMs("3w")).toBe(1814400000);
    expect(timeToMs("1y")).toBe(31536000000);
    expect(timeToMs("0.5d")).toBe(43200000);
    expect(timeToMs("-.5m")).toBe(-30000);
    expect(timeToMs("-1w")).toBe(-604800000);
    expect(timeToMs("1000")).toBe(1000);
    expect(timeToMs("1000asdf")).toBe(null);
})
