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
  let delta = { old : initialValue, delta : 0, 'new' : initialValue};
  return function(deltaValue) {
    deltaValue = deltaValue || 0;
    delta.old = delta['new'];
    delta.delta = deltaValue;
    delta['new'] = delta.old+deltaValue;
    return delta;
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
