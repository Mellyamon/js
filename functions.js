// Functions  - a block of code designed to perform a particular task
// functions are reusable - can be called multiple times
// functions can take inputs(parameters) and can return an output

// declaration of a function

function convertDollarToKsh(amounInUSD) {
  const exchangeRate = 131;
  const amountInKsh = amountInUSD * exchangeRate;
  return amountInKsh;
}

// return keyword is used to return a value from the function/ end the function with a result

// calling/invoking the function -- using the function

console.log(convertDollarToKsh(1));
console.log(convertDollarToKsh(120));
console.log(convertDollarToKsh(100000));
console.log(convertDollarToKsh(10002));

//write a function that takes a number as input/parameter and says wether it is even or odd
// declaration of a function

function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Example usage
console.log(checkEvenOrOdd(10)); // Even
console.log(checkEvenOrOdd(7)); // Odd
