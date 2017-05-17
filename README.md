# qc-type_of

Yet another NPM package to improve upon JavaScript's `typeof` operator.

[![Build Status][travis-svg]][travis-url]

[![npm badge][npm-badge-png]][package-url]

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


[npm-badge-png]: https://nodei.co/npm/qc-type_of.png?downloads=true&stars=true
[package-url]: https://npmjs.org/package/qc-type_of
[travis-svg]: https://travis-ci.org/hypersoftllc/qc-type_of.svg?branch=master
[travis-url]: https://travis-ci.org/hypersoftllc/qc-type_of
