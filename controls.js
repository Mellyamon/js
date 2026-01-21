//Control structures and logic for the application
//Loops and conditionals

//conditional statements-  if else,switch

let temperature = 30;

if (temperature > 25) {
  console.log("turn on cooling AC");
} else if (temperature > 21) {
  console.log("perfect temperature--no action needed");
} else {
  console.log("turn on the heating AC");
}
//Task using if else,do a grading system where>80 logs A above 65 logs c,below 50logs fail
let marks = 67;

if (marks > 80) {
  console.log("Grade: A");
} else if (marks > 65) {
  console.log("Grade: C");
} else if (marks >= 50) {
  console.log("Grade: Pass (D or above)");
} else {
  console.log("Grade: Fail");
}

//DO THE TWO CONDITIONS ABOVE USING SWITCH STATEMENT

//Loops--for,while,do while
//Loops are used to repeat a block of code multiple times until a certain is met
//a loop must have a starting point,and ending point and an increment/decrement

for (let i = -6; i <= 5; i += 3) {
  console.log("iteration number:" + i);
}

//Block {}
//be careful with infinite loops - a loop that never ends
//Task:using a loop,log all even numbers between 1 and 20,hint:use modulus operator%

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
