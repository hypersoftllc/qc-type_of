# qc-type_of

Yet another NPM package to improve upon JavaScript's `typeof` operator.

[![Build Status][travis-svg]][travis-url]


## Installation

```sh
npm install --save qc-type_of
```

## Comparison with JavaScript's `typeof` Operator

**Differences**

| Value      | typeof      | typeOf      |
| ---------- | ----------- | ----------- |
| arguments  | 'object'    | 'arguments' |
| new Boolean(...) | 'object' | 'boolean' |
| Infinity   | 'number'    | 'infinity'  |
| NaN        | 'number'    | 'nan'       |
| null       | 'object'    | 'null'      |
| new Number(...) | 'object' | 'number'  |
| new String(...) | 'object' | 'string'  |

[travis-svg]: https://travis-ci.org/hypersoftllc/qc-type_of.svg?branch=master
[travis-url]: https://travis-ci.org/hypersoftllc/qc-type_of
