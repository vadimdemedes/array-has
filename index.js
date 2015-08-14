'use strict';

/**
 * Expose array-has
 */

module.exports = has;


/**
 * Array#includes with support for regex
 */

function has (arr, pattern) {
  var result = false;

  arr.forEach(function (item) {
    if (matches(item, pattern)) {
      result = true;
    }
  });

  return result;
}


/**
 * Helpers
 */

function matches (item, pattern) {
  if (isRegExp(pattern)) {
    return pattern.test(item);
  }

  return item === pattern;
}

function isRegExp (pattern) {
  return pattern.constructor === RegExp;
}
