const person = {
  age: 20,
};

// person.name = '홍길동';

Object.defineProperty(person, "name", {
  value: "Shin",
  writable: false,
  enumerable: false,
  configurable: true,
});

console.log(person);
console.log(Object.getOwnPropertyDescriptor(person, "name"));

person.name = "아이유";
console.log(person);
console.log(Object.keys(person));

for (let idx in person) {
  // 열거 시키는 구문
  console.log(person[idx]); // property key
}
for (let value in person) {
  // 열거 시키는 구문
  console.log(value); // property key
}
