class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }
  eat() {
    return "밥을 먹어요!";
  }
  move() {
    return "움직여요!";
  }
}

class Dog extends Animal {
  constructor(age, weight, kk) {
    // 상위 클래스의 constructor를 호출
    super(age, weight);
    this.kk = kk; // 반드시 super뒤에 나와야한다.
  }
  run() {
    return "달려요!";
  }
}

const dog = new Dog(10, 7, 100);
console.log(dog); // Dog { age: 10, weight: 7, kk: 100 }
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true
