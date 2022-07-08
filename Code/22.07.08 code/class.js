class Person {
  // constructo(생성자)

  constructor(name) {
    // instance의 초기화
    // instance의 property를 설정
    this.name = name;
  }

  // prototype method
  sayHello() {
    console.log(" prototype hey we~");
  }

  // static method
  static sayHi() {
    console.log("static hey we~");
  }
}

const me = new Person("홍길동");
