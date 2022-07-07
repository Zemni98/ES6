function foo() {
  const x = 1;
  const y = 2;

  // return되는 중첩함수가 외부함수의 식별자를 참조하고
  // 있지 않기때문에 이 함수는 closure가 아니다!!
  function bar() {
    const z = 3; // local 변수
    console.log(z); // 만약 x,y를 참조하게 되면 closure가 된다.
  }
  return bar;
}
const bar = foo();
bar();
