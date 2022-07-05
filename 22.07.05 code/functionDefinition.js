// 함수 선언문
function foo() {
  console.log("foo 함수"); // 눈에는 보이지 않지만 foo라는 변수를 묵시적으로 생성
}

(function bar() {
  console.log("bar 함수");
}); // ()안에 있으면 계산하라는 얘기, 즉 평가
// 함수 표현식
foo(); // 가능 'foo 함수'
bar(); // 불가능
