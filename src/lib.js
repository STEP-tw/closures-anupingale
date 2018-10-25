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

const makeDeltaTracker = function(newValue) {
  let delta = { old : newValue, delta : 0, 'new' : newValue};
  return function(deltaValue) {
    if(deltaValue == undefined) {
      return delta;
    }
    delta.old = delta['new'];
    delta.delta = deltaValue;
    delta['new'] = delta.old+deltaValue;
    return delta;
  }
}

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
