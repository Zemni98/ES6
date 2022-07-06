var x = 1;

function myFunc() {
  console.log(x); // 1
  var x = 100;
}
console.log(x); // Undefined

myFunc();
