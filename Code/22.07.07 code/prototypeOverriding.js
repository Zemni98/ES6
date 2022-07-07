function Person(name) {
  this.name = name;

  //instance method
  this.getName = function () {};
}

// prototype method

Person.prototype.sayHello = function () {
  console.log(`안녕하세요. ${this.name}`);
};
// instance를 생성
const me = new Person("홍길동");

// overriding
me.sayHello = function () {
  console.log(`Hello ${this.name}`);
};
// 만약 overriding이 발생하면 이 발생된 overriding에
// 의해서 숨겨진 prototype method를 property shadowing
// 되었다고 말한다.
me.sayHello(); // 안녕하세요. 홍길동
