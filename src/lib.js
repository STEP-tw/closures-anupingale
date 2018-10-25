const makeConstant = function(value) {
  return function() {
    return value;
  }
}

const makeCounterFromZero = function() {
  let counter = 0;
  return function() {
    return counter++;
  }
}

const makeCounterFromN = function(value) {
  let counter = value;
  return function() {
     return counter++;
  }
}

const makeDeltaTracker = undefined;
const makeFiboGenerator = undefined;
const makeCycler = undefined;
const curry = undefined;
const compose = undefined;

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
