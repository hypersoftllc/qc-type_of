
import { typeOf, type_of } from './index';

describe('qc-type_of', () => {

  describe('`typeOf`', () => {

    it('should be a function', () => {
      expect(typeof typeOf).toBe('function');
    });

    it('called with an Arguments object should return `"arguments"`', function () {
      let result = typeOf(arguments);
      expect(result).toBe('arguments');
    });

    it('called with an empty array should return `"object"`', () => {
      let result = typeOf([]);
      expect(result).toBe('object');
    });

    it('called with `Array` object should return `"object"`', () => {
      let result = typeOf(new Array('one', 'two', 'etc'));
      expect(result).toBe('object');
    });

    it('called with `false` should return `"boolean"`', () => {
      let result = typeOf(false);
      expect(result).toBe('boolean');
    });

    it('called with `true` should return `"boolean"`', () => {
      let result = typeOf(true);
      expect(result).toBe('boolean');
    });

    it('called with `Boolean` object should return `"boolean"`', () => {
      // Although it is bad practice to use the Boolean constructor, this confirms that 'object' is not returned.
      let result = typeOf(new Boolean(true));
      expect(result).toBe('boolean');
    });

    it('called with a date should return `"object"`', () => {
      let result = typeOf(new Date());
      expect(result).toBe('object');
    });

    it('called with an `Error` object should return `"object"`', () => {
      let result = typeOf(new Error('Help!'));
      expect(result).toBe('object');
    });

    it('called with a function should return `"function"`', () => {
      let result = typeOf(function () {});
      expect(result).toBe('function');

      result = typeOf(Array);
      expect(result).toBe('function');

      result = typeOf(Boolean);
      expect(result).toBe('function');

      result = typeOf(Date);
      expect(result).toBe('function');

      result = typeOf(Error);
      expect(result).toBe('function');

      result = typeOf(Function);
      expect(result).toBe('function');

      result = typeOf(Number);
      expect(result).toBe('function');

      result = typeOf(Object);
      expect(result).toBe('function');

      result = typeOf(RegExp);
      expect(result).toBe('function');

      result = typeOf(String);
      expect(result).toBe('function');
    });

    it('called with `Function` object should return `"function"`', () => {
      let result = typeOf(new Function('return;'));
      expect(result).toBe('function');
    });

    it('called with an empty object literal should return `"object"`', () => {
      let result = typeOf({});
      expect(result).toBe('object');
    });

    it('called with a non-empty object literal should return `"object"`', () => {
      let result = typeOf({ prop: 'not empty' });
      expect(result).toBe('object');
    });

    it('called with `null` should return `"null"`', () => {
      let result = typeOf(null);
      expect(result).toBe('null');
    });

    it('called with `Infinity` should return `"infinity"`', () => {
      let result = typeOf(Infinity);
      expect(result).toBe('infinity');
    });

    it('called with `Number.NEGATIVE_INFINITY` should return `"infinity"`', () => {
      let result = typeOf(Number.NEGATIVE_INFINITY);
      expect(result).toBe('infinity');
    });

    it('called with `Number.POSITIVE_INFINITY` should return `"infinity"`', () => {
      let result = typeOf(Number.POSITIVE_INFINITY);
      expect(result).toBe('infinity');
    });

    it('called with `NaN` should return `"nan"`', () => {
      let result = typeOf(NaN);
      expect(result).toBe('nan');
    });

    it('called with `Number.NaN` should return `"nan"`', () => {
      let result = typeOf(Number.NaN);
      expect(result).toBe('nan');
    });

    it('called with `Number.MIN_VALUE` should return `"number"`', () => {
      let result = typeOf(Number.MIN_VALUE);
      expect(result).toBe('number');
    });

    it('called with `-1` should return `"number"`', () => {
      let result = typeOf(-1);
      expect(result).toBe('number');
    });

    it('called with `0` should return `"number"`', () => {
      let result = typeOf(0);
      expect(result).toBe('number');
    });

    it('called with `1` should return `"number"`', () => {
      let result = typeOf(1);
      expect(result).toBe('number');
    });

    it('called with `Number.MAX_VALUE` should return `"number"`', () => {
      let result = typeOf(Number.MAX_VALUE);
      expect(result).toBe('number');
    });

    it('called with `Number` object should return `"number"`', () => {
      let result = typeOf(new Number(3.14));
      expect(result).toBe('number');
    });

    it('called with a regular expression should return `"object"`', () => {
      let result = typeOf(/typeof/);
      expect(result).toBe('object');
    });

    it('called with `RegExp` object should return `"object"`', () => {
      let result = typeOf(new RegExp('.*\\..*'));
      expect(result).toBe('object');
    });

    it('called with an empty string should return `"string"`', () => {
      let result = typeOf('');
      expect(result).toBe('string');
    });

    it('called with a non-empty string should return `"string"`', () => {
      let result = typeOf('not empty');
      expect(result).toBe('string');
    });

    it('called with `String` object should return `"string"`', () => {
      // Although it is bad practice to use the String constructor, this confirms that 'object' is not returned.
      let result = typeOf(new String('WTF'));
      expect(result).toBe('string');
    });

    it('called with a `Symbol` object should return `"symbol"`', () => {
      if (typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol') {
        let result = typeOf(Symbol.iterator);
        expect(result).toBe('symbol');
      }
    });

    it('called with `undefined` should return `"undefined"`', () => {
      let result = typeOf(undefined);
      expect(result).toBe('undefined');

      result = typeOf();
      expect(result).toBe('undefined');
    });

  });

  describe('`type_of`', () => {

    it('should be a function', () => {
      expect(typeof type_of).toBe('function');
    });

    it('should be an alias of `typeOf`', () => {
      expect(type_of).toBe(typeOf);
    });

  });

});
