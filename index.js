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
