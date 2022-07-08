class Base {
  constructor(name) {
    this.name = name;
  }

  sayhello() {
    return "안녕하세요!";
  }
}

class Derived extends Base {
  sayhello() {
    return super.sayhello() + this.name;
  }
}
const base = new Derived("신재민");
console.log(base.sayhello());
