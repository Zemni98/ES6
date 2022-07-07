function Person(name) {
  this.name = name;
  this.getName = function () {
    return `내이름은 ${this.name}`;
  };
}

const person1 = new Person("아이유");
const person2 = new Person("김연아");

console.log(person1.getName());
console.log(person2.getName());
