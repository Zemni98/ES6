foo(); // 호출되요!
// add(); Error
//선언적 함수, 함수 표현식이냐에 따라서 함수 hoisting이 달라진다.

// 함수 선언문
function foo() {
  console.log("foo 함수"); // 눈에는 보이지 않지만 foo라는 변수를 묵시적으로 생성
}

// 함수 표현식
(function bar() {
  console.log("bar 함수");
}); // ()안에 있으면 계산하라는 얘기, 즉 평가
// foo();  가능 'foo 함수'
// bar();  불가능
