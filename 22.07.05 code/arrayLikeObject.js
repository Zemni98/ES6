let myStr = "Hello";

// primitive type을 마치 객체(배열)처럼 사용
console.log(myStr[0]); // H
console.log(myStr.length); // 5

myStr[0] = "h";

console.log(myStr); // Hello
// 내부슬롯에 있는 인덱스값이 변경되기 때문에 원래의 값은 변경되지 않는다.
