const assert=require("assert");
const makeConstant = require('../src/lib.js').makeConstant;

const testMakeConstantWithNoArgs = function() {
  let constantlyReturnTwo = function(){
    return makeConstant(2);
  }

  let constantlyReturnString = function() {
    return makeConstant('hello');
  }

  let constantlyReturnArray = function() {
    return makeConstant([1, 2, 3]);
  }

  let constantlyReturnObject = function() {
    return makeConstant({a: 1, b: 2});
  }

  assert.equal(2, constantlyReturnTwo());
  assert.equal('hello', constantlyReturnString());
  assert.deepEqual([1, 2, 3], constantlyReturnArray());
  assert.deepEqual({a: 1, b: 2}, constantlyReturnObject());
};

const testMakeConstantWithUselessArg = function() {
  let constantlyReturnTwo = function(num) {
    return makeConstant(2);
  }

  let constantlyReturnString = function() {
    return makeConstant('hello');
  }

  let constantlyReturnArray = function() {
    return makeConstant([1, 2, 3]);
  }
  let constantlyReturnObject = function() {
    return makeConstant({a: 1, b: 2});
  }

  assert.equal(2, constantlyReturnTwo(1));
  assert.equal('hello', constantlyReturnString(1));
  assert.deepEqual([1, 2, 3], constantlyReturnArray(1));
  assert.deepEqual({a: 1, b: 2}, constantlyReturnObject(1));
};

const runTests = function() {
  if(!makeConstant) {
    console.log("Function 'makeConstant' in not implemented yet. Not running tests.");
    return;
  }

  testMakeConstantWithNoArgs();
  console.log("testMakeConstantWithNoArgs passed");

  testMakeConstantWithUselessArg();
  console.log("testMakeConstantWithUselessArg passed");
};

runTests();
