//Code run on chrome developer tool, snippet option
function test() {
  var a = 3;
  b = 8;

  var c = b;
  b = a;
  a = c;

  return a, b;

  console.log(a);
  console.log(b);
}

var text = prompt("Write your text here");
var textCount = text.length;
alert(
  "You have written " +
    textCount +
    " characters, you have have " +
    (140 - textCount) +
    " characters remaining"
);

//Question: create a program that asks a user their firstname and greets them with a capatilise firstname
//Create a var that stores user's name via propmt

//Capitalise the first letter, to do this we need slice and toUpperCase

//Create a var for the rest of username

//Concatenate first char with the rest of the chars

var username = prompt("What's your firstname?");
var firstChar = username.slice(0, 1).toUpperCase();
var restOfUserName = username.slice(1, -1); //could use the .length function to solve
var restOfUserName = restOfUserName.toLowerCase();
var realName = firstChar + restOfUserName;
console.log("Hello " + realName);

//Basic arithmetic and modulo operator in js

// Dog age to human age formula - humanAge = (dogAge -2) * 4 + 21

var dogAge = prompt("What's your dog's age? "); // create a var to store dog age from user

var humanAge = (dogAge - 2) * 4 + 21; //Use the user input for dog age into formula

alert("Your dog's human age is " + humanAge); //display the human age from the answer to user

//Increment and decrement expressions

var x = 1;
x = +1;
alert(x); // evalute to 2
x++;
alert(x); // evaluate to 3

// Functions

function functionName() {
  //some code
}

function lifeInWeeks(num) {
  var daysLeft = num * 365,
    monthsLeft = num * 12,
    weeksLeft = num * 52;
}


let lovePercentage = Math.random() * 100;
lovePercentage = Math.floor(lovePercentage) + 1; 
console.log(lovePercentage);


function bmiCalculator(weight, height) {
  let bmi = weight / Math.pow(height, 2);
  if (bmi < 18.5) {
    return "Your BMI is " + bmi + ", so you are underweight.";
  }
  if (bmi >= 18.5 && bmi <= 24.9) {
    return "Your BMI is " + bmi + ", so you have a normal weight.";
  }
  if (bmi > 24.9) {
    return "Your BMI is " + bmi + ", so you are overweight.";
  }
}

function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year.";
      } else {
        return "Not leap year.";
      }
    } else {
      return "Leap year.";
    }
  } else {
    return "Not leap year.";
  }
}

console.log(isLeap(2100));