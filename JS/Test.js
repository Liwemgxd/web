// let map = new Map();
// map.set('liwemg', 24);
// map.set('liwemg', 25);
// console.log(map)
// map.forEach(((value, key, map1) => {
//     console.log(key);
//     console.log(value)
// }))

// map.forEach((item) => {
//     console.log(item)
// })
//
// let arr = [1,2,3]
// arr.forEach((item,key) => {
//     console.log(item)
//     console.log(key)
// })


// let set = new Set();
// set.add(1)
// set.add(2)
// set.add(3)
// for(let item of  set){
//     console.log(item)
// }
// set.forEach((value, index) => {
//     console.log(value)
//     console.log(index)
// })

// if(null == undefined){
//     console.log('ok')
// }
// if ('' == 0){
//     console.log('ok')
// }



//内部属性 [[Class]]
console.log(Object.prototype.toString.call([1, 2, 3]));

class Class2 {
    get [Symbol.toStringTag]() {
        return "Class2";
    }
}

console.log(Object.prototype.toString.call(new Class2()));; // "[object Class2]"

console.log(typeof null)
let a = undefined
console.log(typeof void 0)


console.log(Object.getPrototypeOf([1]))

console.log(isNaN('123h'))
console.log(Number.isNaN('123h'))


let arr = [1,2,3,4,3,2,1]
// arr = arr.filter((item, index, arr) => {return  arr.indexOf(item) === index})
// console.log(arr)
// console.log(arr.indexOf(2))
//
// let map = new Map()
// map.set('name1', 'liwemg')
//
// for (let item of map){
//     console.log(item)
// }
//
// map.forEach((item,key) => {
//     console.log(item, key)
// })

let obj = {'name1': 'liwemg', 'name2': 'fuzishuo'};
console.log(Object.keys(obj))
console.log(Object.entries(obj))
console.log(Object.values(obj))
console.log(obj.valueOf().toString())

console.log(new Array(5).fill(0).map(() => new Array(5).fill(0)))
console.log([,,,].length)
console.log(typeof document)

