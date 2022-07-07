// 객체 생성하는 방법 중 하나
// 객체를 생성할 때 객체의 상위 prototype객체를 직접 지정
const obj = Object.create(null); // 상위 prototype 객체가 없다고 지정

console.log(obj.__proto__); // undefined

// 그럼 이런 경우를 위해 어떻게 사용하는것이 좋을까요?
// Object가 가지고 있는 method를 이용하는게 좋아요!

console.log(Object.getPrototypeOf(obj)); // null
// -> 이 method를 사용하는것을 권장한다.
