'use strict';

const reader = require('../lib/reader');
const right = [`${__dirname}/../assets/dj1.txt`, `${__dirname}/../assets/dj2.txt`, `${__dirname}/../assets/dj3.txt`];
const wrong = [`${__dirname}/../toy_story.txt`, `${__dirname}/../the_swan_princess.txt`, `${__dirname}/../mulan.txt`];
require('jest');

describe('Array Validation', () => {
  it('should check to see if paths is a valid array', () => {
    expect(Array.isArray(right)).toBe(true);
  });
});

describe('Array Validation', () => {
  it('should return the strings in the same order', () => {
    return reader.booyah(right, (err, x) => {
      expect(typeof x).toEqual(true);
    });
  });
});

describe('Incorrect File Paths', () => {
  test('should reject name errors in the file paths', () => {
    reader.booyah(wrong, (err) => {
      expect(err).not.toBeNull();
    });
  });
});