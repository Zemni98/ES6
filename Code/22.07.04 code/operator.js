console.log(1 + 2);

console.log(typeof (1 + "2")); // 문자열 12

console.log(typeof (1 + true)); // true -> 숫자로 변환 , true = 1 결과 2 (숫자)

console.log(typeof (1 + null)); // null -> 숫자로 변환 , null = 0 결과 1 (숫자)

console.log(typeof (1 + undefined)); // NaN = 숫자

console.log(typeof null); // Object
// bug인걸 ECMA도 아는데 기존에 돌아갔던 프로그램이 안 돌아갈 수 있어서 고치지 않는다.

console.log(typeof String(1)); // String

console.log(typeof String(NaN)); // String

console.log(typeof (1).toString()); // String
// JAVA에서 자체적으로 래퍼객체를 만들어서 객체기반으로 사용할 수 있게 한다.
// 나중에 그림으로 설명해주신다. 그림이해 필수!
