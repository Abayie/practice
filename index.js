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
alert("You have written " + textCount + " characters, you have have " + (140 - textCount) + " characters remaining");

var message = prompt("What's your name?");
var realName = message.toUpperCase();
console.log("Hello " + realName);
