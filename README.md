# css-operations
[![npm](https://img.shields.io/npm/v/@codebundlesbyvik/css-operations)](https://www.npmjs.com/package/@codebundlesbyvik/css-operations)
[![npm - downloads per week](https://img.shields.io/npm/dw/@codebundlesbyvik/css-operations)](https://www.npmjs.com/package/@codebundlesbyvik/css-operations)

JavaScript helper functions for various CSS operations.

<br>

## Installation

``` shell
// Install package from npm
npm install @codebundlesbyvik/css-operations
```

<br>

``` javascript
// Import the functions you need
import { getPropValue, motionAllowed } from "@codebundlesbyvik/css-operations";

// ... or, import the module in its entirety
import * as cssOps from "@codebundlesbyvik/css-operations";
```

<br>

## Functions
- [getPropValue](#getpropvalueel-prop)
- [getUnit](#getunitvalue)
- [motionAllowed](#motionallowed)
- [timeToMs](#timetomstime)

<br>

### `getPropValue(el, prop)`

Retrieve an element's CSS property value.

If the given property is not set, `null` will be returned.

#### Parameters

**\*** indicates required

 - **\*** `el` ([`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element)): Target Element.
 - **\*** `prop` (`String`): Property to retrieve.

#### Example

``` javascript
const el = document.querySelector("#example-div-1");
// margin-bottom: 0.75rem;
// background-color: black;

getPropValue(el, "margin-bottom");
// > "0.75rem"

getPropValue(el, "background-color");
// > "black"

getPropValue(el, "non-existant");
// > null
```

<br>

### `getUnit(value)`

Retrieve the unit of a quantitative CSS value.

If the given value has no unit, `null` will be returned.

#### Parameters

 - `value` (`String`): CSS value to get the unit from.

#### Example

``` javascript
getUnit("2px")
// > "px"

getUnit(".5ms")
// > "ms"

getUnit("100")
// > null
```

<br>

### `motionAllowed()`

Check `prefers-reduced-motion`. Returns a `Boolean` based on the result.

#### Parameters

 - None

#### Example

``` javascript
// prefers-reduced-motion: no-preference OR unsupported
motionAllowed()
// > true

// prefers-reduced-motion: reduce
motionAllowed()
// > false
```

<br>

### `timeToMs(time)`

Convert CSS-style "unit-based time" value to a `Number` of milliseconds.

If the given value is unitless, it'll be returned as-is. If it has an unrecognized unit, the returned value will be `null`.

#### Parameters

 - `time` (`String`): CSS-style time duration (i.e. `10s`, `5h`, `0.5d`).

#### Recognized units

 - `ms`: Milliseconds
 - `s`: Seconds
 - `h`: Hours
 - `d`: Days
 - `w`: Weeks
 - `y`: Years - **assumes 1 year = 365 days**

#### Example

``` javascript
timeToMs("2s")
// > 2000

timeToMs("0.25d")
// > 21600000

timeToMs("-1w")
// > -604800000

timeToMs("1asdf")
// > null

timeToMs("20")
// > 20
```

<br>

## License

MIT © [Viktor Chin-Kon-Sung](https://github.com/vikputthiscodeongit)
