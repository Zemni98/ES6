function Circle(radius) {
  this.radius = radius;

  Circle.prototype.getDiameter = function () {
    return 2 * this.radius;
  };

  Circle.prototype.name = "홍길동";
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.name, circle2.name);
//circle1.name = "아이유"; // 안바뀐다.
Circle.prototype.name = "SUMING";
console.log(circle1.name, circle2.name);
circle1.__proto__.name = "아이유";
console.log(circle1.name, circle2.name);
