function Person() {}

const person1 = Person();
console.log(person1); // undefined

const person2 = new Person();
console.log(person2); // Person {}

const person3 = {};
console.log(person3); // {}
