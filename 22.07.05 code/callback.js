// 잘 만든 함수가 존재!
// 그런데 이 함수의 기능을 변경(추가)
// 1. 원래 있는 함수를 수정!
// 2. 함수를 새로 추가해서 만들어요!
// 3. 함수를 추상화 시켜서 인자로 받아서 사용!

function repeat(n, f) {
  // 고차함수
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

let logAll = function (i) {
  // callback 함수
  console.log(i);
};

let logOdd = function (i) {
  // callback 함수
  if (i % 2) {
    console.log(i);
  }
};

repeat(3, logAll);
// repeat(5, logOdd);
