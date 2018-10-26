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

const makeFiboGenerator = function(firstNumber = 0,secondNumber) {
  if(!secondNumber) {
    secondNumber = firstNumber || 1;
    firstNumber = 0;
  }
  return function() {
    let fiboNumber = firstNumber;
    let sum = firstNumber+secondNumber;
    firstNumber = secondNumber;
    secondNumber = sum;
    return fiboNumber;
  }
}

const makeCycler = function(inputValue) {
  let counter = 0;
  let array = inputValue.map((element) =>{return element});
  return function() {
    return array[counter++ % (array.length)];
  }
}

const curry = function(func,element) {
  return function(value1,value2) {
    return func(element,value1,value2);
  }
}

const compose = function(func1,func2) {
  return function(element1,element2) {
    return func1(func2(element1,element2));
  }
}

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
