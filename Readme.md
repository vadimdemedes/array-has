# array-has

Array#includes with support for regular expressions.


### Installation

```
$ npm install array-has --save
```


### Usage

```javascript
const has = require('array-has');

has([0, 1, 2], 2).should.equal(true);
has(['a', 'b', 'c'], 'b').should.equal(true);
has(['Hello', 'world'], /hello/i).should.equal(true);
```


### Tests

```
$ make test
```


### License

array-has is released under the MIT license.
