let arr = [1,2,3]
let obj = {'a': 1, 'b': 2}
let map = new Map();
map.set('a', 1);
map.set('b', 2)
for(let item of map){
    console.log(item)
}

// for(let item of obj){
//     console.log(item)
// }
// for(let index in obj){
//     console.log(index)
// }
// arr.forEach(item =>{
//     console.log(item)
// })

function Person(){
    this.name = 'Jack';
}
var p = Person();
console.log(p) // undefined
console.log(name) // Jack
// console.log(p.name) // 'name' of undefined

