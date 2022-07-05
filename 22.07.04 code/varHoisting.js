var x = 1;

function myFunc() {
  console.log(x);
  var x = 100;
}
console.log(x);

myFunc();
