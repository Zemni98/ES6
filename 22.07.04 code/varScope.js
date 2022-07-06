var x = 1;
if (true) {
  var x = 100;
}

console.log(x); // 100

var i = 100;

for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i); // 0 1 2 3 4 5
