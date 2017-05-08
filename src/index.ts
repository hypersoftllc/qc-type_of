
// ==========================================================================
/**
 * Returns the type of the specified value as a string.  The list of possible types are:
 *
 * - `'arguments'`: If the specified value is a function Arguments object.
 * - `'boolean'`: If the specified value is a boolean value.
 * - `'function'`: If the specified value is a function reference.  This includes generator functions.
 * - `'infinity'`: If the specified value is `Infinity`, `Number.NEGATIVE_INFINITY`, or `Number.POSITIVE_INFINITY`.
 * - `'nan'`: If the specified value is `NaN`.
 * - `'null'`: If the specified value is `null`.
 * - `'number'`: If the specified value is a number.
 * - `'object'`: If the specified value is an object.
 * - `'string'`: If the specified value is a string.
 * - `'symbol'`: If the specified value is a symbol (ES6).
 * - `'undefined'`: If the specified value is `undefined`.
 * - `'undetermined'`: If the specified value has an undetermined type.  If this ever happens, then update this function
 *   to appropriately handle the value.
 *
 * If `'object'` is returned, then the `instanceof` operator can be used to narrow down the type.
 *
 * **Example Usage:**
 *
 * ```js
 * (function () {
 *   typeOf(arguments);  // 'arguments'
 * })();
 *
 * typeOf([]);  // 'object'
 *
 * typeof new Boolean(...);  // 'object'
 * typeOf(new Boolean(...));  // 'boolean' instead of 'object'
 *
 * typeOf(true);  // 'boolean'
 *
 * typeOf(new Date());  // 'object'
 *
 * typeOf(function () {});  // 'function'
 *
 * typeof Infinity;  // 'number'
 * typeOf(Infinity);  // 'infinity' instead of 'number'
 *
 * typeof Number.NEGATIVE_INFINITY;  // 'number'
 * typeOf(Number.NEGATIVE_INFINITY);  // 'infinity' instead of 'number'
 *
 * typeof NaN;  // 'number'
 * typeOf(NaN);  // 'nan' instead of 'number'
 *
 * typeof null;  // 'object'
 * typeOf(null);  // 'null' instead of 'object'
 *
 * typeof new Number(...);  // 'object'
 * typeOf(new Number(...));  // 'number' instead of 'object'
 *
 * typeOf(1234);  // 'number'
 *
 * typeOf({});  // 'object'
 *
 * typeof new String(...);  // 'object'
 * typeOf(new String(...));  // 'string' instead of 'object'
 *
 * typeOf('');  // 'string'
 *
 * typeOf();  // 'undefined'
 * ```
 *
 * P.S.
 *
 * Never use `new Boolean`, `new Number`, or `new String` in the first place.
 *
 * @param {?*} value - The value to determine the type of.
 *
 * @return {string} The type of the specified value.
 */
function typeOf(value?: any): string {
  let typeOfValue: string, typeToString: string;

  if (value === null) {
    return 'null';
  }

  typeOfValue = typeof value;

  if (typeOfValue == 'undefined' || typeOfValue == 'string' || typeOfValue == 'boolean' || typeOfValue == 'function' || typeOfValue == 'symbol') {
    return typeOfValue;
  }

  typeToString = Object.prototype.toString.call(value);

  switch (typeToString) {
  case '[object Arguments]':
    return 'arguments';
  case '[object Boolean]':
    return 'boolean';
  case '[object Number]':
    if (value === Number.POSITIVE_INFINITY || value === Number.NEGATIVE_INFINITY) {
      return 'infinity';
    }
    // The following removes the dependency on Number.isNaN which first showed up in ES6.
    // The following works because `NaN` is the only value in JavaScript that does not equal itself.
    if (value !== value) {
      return 'nan';
    }
    return 'number';
  case '[object String]':
    return 'string';
  }

  if (typeOfValue == 'object') {
    return 'object';
  }

// @if DEBUG
  /* eslint no-console: "off" */
  console.warn(`Unable to determine type of "${value}".  Please update npm:qc-type_of:typeOf function to handle it.`);
// @endif

  return 'undetermined';
}

// ==========================================================================
export { typeOf, typeOf as type_of };
