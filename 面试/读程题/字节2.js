
new Promise(resolve => {
    console.log(1);
    resolve();
}).then(() => {
    console.log(4);
})
setTimeout(() => console.log(2), 0);
console.log(3);