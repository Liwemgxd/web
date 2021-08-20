/**
 * 微任务包括了 promise 的回调、node 中的 process.nextTick 、对 Dom 变化监听的 MutationObserver。
 * 宏任务包括了 script 脚本的执行、setTimeout ，setInterval ，setImmediate 一类的定时事件，还有如 I/O 操作、UI 渲染等。
 */

console.log(1)
setTimeout(()=>{
    console.log(2)
})
new Promise((resolve, reject) => {
    console.log(3);
    resolve();
    setTimeout(()=>{
        console.log('ok')
    })
    // reject();
}).then(()=>{
    console.log(4)
}).catch(()=>{
    console.log(5)
})

console.log(6)

