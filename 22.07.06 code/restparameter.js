function foo(...args) {
  console.log(arguments);
  // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
  console.log(args);
  // [ 1, 2, 3, 4, 5 ]
  return args.pop();
}
var result = foo(1, 2, 3, 4, 5);
console.log(result);
