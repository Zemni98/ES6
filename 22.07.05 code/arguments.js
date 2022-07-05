// 함수 선언문

function add() {
  // arguments  [2,3,4]
  let sum = 0;
  // arguments는 유사배열객체(Array-like Object)
  // 모든 유사배열객체는 length property를 가지고 배열처럼 index를 이용해서
  // access가능. 당연히 순환가능
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(add(2));
console.log(add(2, 3, 4));
