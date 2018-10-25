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

const makeDeltaTracker = function(initialValue) {
  let oldValue = initialValue;
  return function(deltaValue = 0) {
    return { old : oldValue,
      delta : deltaValue,
      'new' : oldValue = (oldValue+deltaValue)}
  }
}

const makeFiboGenerator = function() {
  let firstNumber = 0;
  let secondNumber = 1;
  return function() {
  }
}
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
