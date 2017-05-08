# qc-type_of

Yet another NPM package to improve upon JavaScript's `typeof` operator.

[![Build Status](https://travis-ci.org/hypersoftllc/qc-type_of.svg?branch=master)](https://travis-ci.org/hypersoftllc/qc-type_of)


## Usage

```sh
npm install --save qc-type_of
```

## Comparison with JavaScript's `typeof` Operator

**Differences**

| Value      | typeof      | typeOf      |
| ---------- | ----------- | ----------- |
| arguments  | 'object'    | 'arguments' |
| []         | 'object'    | 'array'     |
| new Boolean(...) | 'object' | 'boolean' |
| new Date() | 'object'    | 'date'      |
| Infinity   | 'number'    | 'infinity'  |
| NaN        | 'number'    | 'nan'       |
| null       | 'object'    | 'null'      |
| new Number(...) | 'object' | 'number'  |
| /ab/i      | 'object'    | 'regexp'    |
| new String(...) | 'object' | 'string'  |
