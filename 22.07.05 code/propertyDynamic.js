var obj = {
  myName: "홍길동",
};

obj.myAge = 20;
obj["!myPhone"] = "010-1234-5678";
//naming rule에 맞지 않는 property를 추가할때는 [] bracket rotation을 써야한다.
console.log(obj);
