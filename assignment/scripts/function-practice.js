console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function helloName(name) {
  return `Hello, ${name}!`;
  // unable to run return with "name", ask
}

// Remember to call the function to test

console.log(helloName('Sarith'));

// 3. Function to add two numbers together & return the result

function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  
  console.log('Numbers are:', firstNumber, secondNumber);
  let answer = firstNumber + secondNumber;
  return answer;

}
console.log(addNumbers(4, 5));


// function actualMath( num1, num2) {
//   console.log('NUMBER is', num1, num2);
//   let answer = num1 * num2;
//   return answer;

// 4. Function to multiply three numbers & return the result

function multiplyThree(thirdNumber, fourthNumber, fifthNumber) {
  // return multiples

  console.log('New number are:', thirdNumber, fourthNumber, fifthNumber);
  let answer = thirdNumber * fourthNumber * fifthNumber;
  return answer;
}

console.log(multiplyThree(2, 4, 6));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise

function isPositive(number) {
  if (number > 0) {
    console.log('Positives:', number);
    return true;

    // Call the function to test each outcome (true & false) 

  } else {
    console.log('Negative:', number);
    return false;
  }
 
}

// Write a separate console.log statement for each outcome

console.log(isPositive(3));
console.log(isPositive(-3));



// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let numbersArray = [1,2,3,4];


function getLast(array) {
  console.log('In the array:', array);


// needs function to call array and return last item

  let lastItem = array[array.length - 1];
  console.log(lastItem);
 
  return lastItem;
}
let lastItem = getLast(numbersArray)
console.log('Last item:', lastItem);



// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 


function find(value, array) {
  let findIndex = false;
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return findIndex;
}

let array = [0, 1, 2, 3, 4];
let match = 3;
let indexVaule = find(match, array);
console.log("Was item found: ", indexVaule);

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
