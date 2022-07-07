// 생성자 함수의 이름 식별자는 Pascalcase
function Person() {
  console.log(this);
}
/* this
this라는 keyword는 생성자 함수일 경우도 있고
일반 함수인 경우에도 있어요
생성자 함수에서의 this => 생성자 함수에 의해서
만들어질 instance를 가리키는 reference
일반 함수에서의 this => window */
Person();
