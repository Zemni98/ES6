let x = 1;
let y = 2;

const obj = { x, y }; // 확장표현방식
// 식별자를 property key로 가질때 축약형
//식별자를 가져다가 키로쓰고 그 식별자가 가지고있는 값을 property value로 쓴다

console.log(obj);

/* let myObj = {
    name : '홍길동',
    printName: function () {
        console.log(this.name);
    }
}
*/
let myObj = {
  name: "홍길동",
  printName() {
    console.log(this.name); //축약형
  },
};
myObj.printName();
