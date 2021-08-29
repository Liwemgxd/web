
function Animal(type, age) {
    this.type = type;
    this.age = age;
}
const cat1 = new Animal('cat', '2m');
Animal.getAllInfo = function () {
    return `${this.type} ${this.age}`;
};
console.log(cat1.getAllInfo())