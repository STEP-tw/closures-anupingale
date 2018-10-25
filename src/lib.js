const makeConstant = function(value) {
  return function() {
    return value;
  }
}

const makeCounterFromZero = function() {
  return makeCounterFromN(0); 
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
