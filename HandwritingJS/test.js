class A {};
class B extends A{};

let item_A = new A();
let item_B = new B();
console.log(item_A instanceof A)
console.log(item_A instanceof B)
console.log()
console.log(item_B instanceof A)
console.log(item_B instanceof B)
console.log()
console.log(item_A.constructor == A)
console.log(item_A.constructor == B)
console.log()
console.log(item_B.constructor == A)
console.log(item_B.constructor == B)
