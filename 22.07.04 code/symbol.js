/*const mySymbol = Symbol();

console.log(typeof mySymbol); // Symbol

console.log(mySymbol); // Symbol() 값이 노출되지 않는다!

const mySymbol1 = Symbol("소리없는 아우성");
const mySymbol2 = Symbol("소리없는 아우성");

console.log(mySymbol1 === mySymbol2); // false
console.log(mySymbol1.description); // 소리없는 아우성

if (mySymbol) {
  console.log("있어요!");
}*/

const s1 = Symbol.for("mySymbol"); // global Symbol registry라는 곳이 있다.
// 전역 심볼 저장소에서 해당 인자를 키로 가지고 있는 심볼을 찾는다.
// key value의 쌍형태로 저장이 되어있다.
// 만약 존재하지 않으면 Symbol을 만들고 global Symbol registry에 등록하고
// Symbol을 return.
const s2 = Symbol.for("mySymbol");

console.log(s1 === s2); // true

console.log(Symbol.keyFor(s2)); // mySymbol

const Direction = {
  UP: Symbol,
  DOWN: Symbol,
  LIGHT: Symbol,
  RIGH: Symbol,
};
let myDirection = Direction.DOWN;

if (myDirection == Direction.DOWN) {
  console.log(`${myDirection}`);
}
/* KEY값이 중요하고 뒤에 있는 값은 의미가 없을때 상수를 넣게되면
오히려 문제가 생길 수 있기 때문에 Symbol을 사용한다
절대 겹치지 말아야할 값들을 동적으로 써야할때 Symbol을 사용하면 유용하다 */
