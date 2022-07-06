const person = {
  name: "Lee",
};

// 객체가 확장이 가능한지? -> property 추가가 가능한지!
console.log(Object.isExtensible(person));

person.age = 20;
console.log(person); // { name: 'Lee', age: 20 }

Object.preventExtensions(person); // 확장을 막는다.

person.addres = "서울"; // 추가 불가능!!

console.log(person); // { name: 'Lee', age: 20 }

Object.seal(person); // 밀봉 시킨다
delete person.name; // 삭제 불가능!!
console.log(person); // { name: 'Lee', age: 20 }

Object.freeze(person); // 얼린다
person.name = "아이유"; // 변경 불가능!!
console.log(person); // { name: 'Lee', age: 20 }
