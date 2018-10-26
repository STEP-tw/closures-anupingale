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

const makeFiboGenerator = function(firstNumber = 0,secondNumber = 1) {
  let currentNumber = 0;

  if(firstNumber && secondNumber <= 1) {
    let secondNumber = firstNumber;
    firstNumber = 0;
    return function() {
      if(currentNumber == 0) {
        currentNumber++;
        return firstNumber;
      }
      if(currentNumber == 1) {
        currentNumber++;
        return secondNumber;
      }
      
      let sum = firstNumber+secondNumber;
      firstNumber = secondNumber;
      secondNumber = sum;
      return sum;
    }
  }

  return function() {
    if(currentNumber == 0) {
      currentNumber++;
      return firstNumber;
    }
    if(currentNumber == 1) {
      currentNumber++;
      return secondNumber;
    }
    let sum = firstNumber+secondNumber;
    firstNumber = secondNumber;
    secondNumber = sum;
    return sum;
  }
}

const makeCycler = function(inputValue) {
  let counter = 0;
  let array = inputValue.map((element) =>{return element});
  return function() {
    return array[counter++ % (array.length)];
  }
}

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
