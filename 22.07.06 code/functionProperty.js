function foo(f) {
  return f();
}

function bar() {
  return "caller:" + bar.caller;
}
console.log(bar());
console.log(foo(bar));
