async function async1(){
    console.log('1 > async1 start');
    await async2();
    //await 的后面，都可以看做是callback里的内容，下面这一行会自动封装为一个异步回调
    console.log('2 > async1 end')
}

async function async2(){
    console.log('3 > async2')
}

console.log('4 > script start')

setTimeout(function (){
    console.log('5 > setTimeout')
}, 0)
async1()
new Promise(function (resolve){
    console.log('6 > promise1')
    resolve()
}).then(function (){
    console.log('7 > promise2')
})
console.log('8 > script end')