var x = 1;

function loo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}
loo();
