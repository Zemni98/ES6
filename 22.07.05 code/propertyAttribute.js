// Property Attribute를 확인해 보아요!!

const person = {
  name: "Lee",
  age: 20,
};

console.log(Object.getOwnPropertyDescriptor(person, "name"));
// { value: 'Lee', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptors(person));
/*{
    name: { value: 'Lee', writable: true, enumerable: true, configurable: true },
    age: { value: 20, writable: true, enumerable: true, configurable: true }
  }*/
