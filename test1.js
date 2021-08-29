//
// function fn(){
//     let res = []
//     if (arguments.length === 0){
//         let a = 1, b = 2, c = 3
//         res = [a,b,c]
//     }else {
//         let obj = arguments[0];
//         // let a = typeof obj.a !== undefined? obj.a : 1;
//         // let b = typeof obj.b !== undefined? obj.a : 2;
//         // let c = typeof obj.c !== undefined? obj.c : 3;
//         // let a,b,c;
//         const { a:  1, b:  2, c: 3 } = obj;
//         res = [a,b,c]
//     }
// }
//
// const obj = {
//     name: 'li',
//     age: 19
// }
// Object.freeze(obj)
//
// let user = {
//     id: 1
// }
// // arr = [u1, u2, u3];
// function userParse(arr){
//     let obj = {};
//     for (let i = 0; i < arr.length; i++) {
//         let user = arr[i];
//         obj[user.id] = user;
//     }
//     return obj;
// }
// function deParse(obj){
//     let arr = [];
//     for(let key in obj){
//         arr.push(obj[key]);
//     }
//     return arr;
// }
//
// // function quChong(arr){
// //     return arr.filter((item, index) => {
// //         return arr.indexOf(item) === index
// //     })
// // }
// function quChong(arr){
//     let set = new Set();
//     arr.forEach(item=>{
//         if(! set.has(item)){
//             set.add(item)
//         }
//     })
//     return new Array.from(set)
// }
//
//
// function clim(n){
//     let p = 0, q = 0, r = 1;
//     for (let i = 0; i <= n ; i++) {
//         p = q;
//         q = r;
//         r = p + q;
//     }
//     return r;
// }
//
//
// function deletNum(arr, num){
//
//     while(true){
//         let index = arr.indexOf(num);
//         if (index === -1){
//             arr.splice(index, 1);
//         }else break
//     }
//     return arr;
// }
//
// function deletNum(arr, num){
//     let left = 0, right = arr.length - 1;
//
//     while(left < right){
//         while(arr[right] === num && right >= 0){
//             right--;
//         }
//         while(left < right && arr[left] !== num){
//             left++;
//         }
//         if(arr[left] === num){
//             [arr[left], arr[right]] = [arr[right], arr[left]]
//         }
//
//     }
//     arr.splice(right,arr.length-right)
//
//     return arr;
// }
//
//
//
// new Promise((resolve, reject) => {
//
// })
//
//
// new Promise(((resolve, reject) => {
//     setTimeout(() =>{
//         resolve('timeout')
//     }, 3000);
// }))
// function promiseTimeout(promise1, promise2){
//     new Promise.race([promise1, promise2]).then(res => {
//         console.log(res)
//     })
// }
//
// function promiseTimeout(promise1, delay){
//     return new Promise(((resolve, reject) => {
//         setTimeout(()=>{
//             reject('timeout')
//         },delay)
//         promise1.then(data => {
//             resolve(data)
//         })
//     }))
// }
//
//

// function maxSumOfSubArr(arr){
//     let res = [arr[0]]
//     for(let i = 1; i < arr.length; i++){
//         let cur = arr[i];
//         let pre = res[i-1];
//         res.push(Math.max(cur, pre+cur));
//     }
//     return Math.max(...res);
// }
//
// let arr = [1, 0, -1, 10, 5, 7, -6, 2];
// console.log(maxSumOfSubArr(arr));

(function f(){
    let name = 'top';
    function say(){
        console.log('name is: ', this.name);
    }

    const obj = {
        name : 'outer',
        say : say,
        inner:{
            name: 'inner',
            say : say,
        }
    };
    say();
    obj.inner.say();
    setTimeout(obj.say, 3000);
)();
