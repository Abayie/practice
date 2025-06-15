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
var realName = firstChar + restOfUserName;
console.log("Hello " + realName);