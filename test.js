'use strict';

/**
 * Dependencies
 */

var has = require('./');

require('chai').should();


/**
 * Tests
 */

describe ('array-has', function () {

  it ('number', function () {
    has([1, 2, 3], 1).should.equal(true);
  });

  it ('string', function () {
    has(['a', 'b', 'c'], 'a').should.equal(true);
  });

  it ('regexp', function () {
    has(['Hello', 'world'], /hello/i).should.equal(true);
  });

  it ('404', function () {
    has(['a', 0], 'b').should.equal(false);
  });

});