function Circle(radius) {
  this.radius = radius; //일반 함수의 this는 window를 가리킨다.
  // window의 radius라는 속성을 추가한것
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}
const circle = Circle(5);

console.log(radius); // window.radius를 써야하는데 운영환경에 따라서 생략도 가능!
