function Person(name) {
  this.name = name;
}
const me = new Person("홍길동");
const parent = {
  sayHello() {
    console.log("안녕하세요!");
  },
};
/*Person.prototype = {
  sayHello() {
    console.log("안녕하세요!");
  },
};*/
Object.setPrototypeOf(me, parent);

console.log(me.constructor === Person.prototype);
