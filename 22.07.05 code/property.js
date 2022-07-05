var obj = {
  name: "홍길동",
  printName: function myPrint() {
    console.log(`내이름은 ${this.name}`);
  },
  "!myPhone": "010-1234-5678",
  10: 300,
};
console.log(typeof obj); // Object
