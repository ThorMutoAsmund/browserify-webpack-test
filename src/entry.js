import lib from './es6-lib.js';
//import lib from './coffee-lib.coffee';
//import lib from './ts-lib.ts';

//var lib = require('./lib.js');
var sum = require('lodash.sum');

import forOwn from 'for-own';
import forIn from 'for-in';
import forInOk from '../node_modules/for-own/node_modules/for-in';

console.log(lib.double(2));
console.log(lib.addFive(2));
console.log(sum([10, 5]));

var obj = {a: 'foo', b: 'bar', c: 'baz'};
var values = [];
var keys = [];
 
forOwn(obj, function (value, key, o) {
  keys.push(key);
  values.push(value);
});

console.log(keys, values);

try {
  values = [];
  keys = [];
  
  forIn(obj, function (value, key) {
    keys.push(key);
    values.push(value);
  });
}
catch (e) {
  console.log("Error", e);
}


values = [];
keys = [];

forInOk(obj, function (value, key) {
  keys.push(key);
  values.push(value);
});

console.log(keys, values);
