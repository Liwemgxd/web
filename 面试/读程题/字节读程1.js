//
// const pro = new Promise((resolve, reject) => {
//     const innerpro = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(1);
//         }, 0);
//         console.log(2);
//         resolve(3);
//     });
//     innerpro.then(res => console.log(res));
//     resolve(4);
//     console.log("pro");
// })
// pro.then(res => console.log(res));
// console.log("end");
//


// var a = 100;
// function fn() {
//     var b = 30;
//     function bar() {
//         console.log(a + b);
//         console.log(this.b);
//         // console.log(this);
//     }
//     return bar;
// }
// var x = fn(),
//     b = 400;   //全局声明的值类型，并没有注册在全局对象上。
// x();

//130
//undefined


// setTimeout(() => {
//     console.log(1);
// })
// const p1 = Promise.resolve(() => {
//     console.log(2);
// })
// const p2 = new Promise((resolve, reject) => {
//     console.log(3);
//     resolve();
// })
// Promise.race([p1, p2]).then(() => {
//     console.log(4);
// })
// Promise.all([p1, p2]).then(() => {
//     console.log(5);
// })
// console.log(6);

// 2 4 3 6 5

// var a = 1
// var oA = () => {
//     console.log(this)
//     console.log(this.a)
// }
// obj = {
//     a: 10,
//     b: function () {
//         console.log(this.a);
//     }
// }
// var c = obj.b
// oA()  //undefined
// obj.b() //10
// c()  //undefined



//
async function async1() {
    console.log('async1 start');
    await async2()
    console.log('async end');
}
async function async2() {
    return new Promise((resolve, reject) => {
        console.log('async2 start');
        resolve()
    }).then(res => {
        console.log('async2 end');
    })
}

async1()

new Promise(resolve => {
    console.log('Promise');
    resolve()
}).then(res => {
    console.log('Promise end');
})

console.log('script end');

