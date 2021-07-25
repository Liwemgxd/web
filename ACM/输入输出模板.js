
// Javascript(V8)

// while(line=readline()){
//     var lines = line.split(' ');
//     var a = parseInt(lines[0]);
//     var b = parseInt(lines[1]);
//     print(a+b);
// }



// 基于JS node
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let count = 1;
const inputArr = [];
rl.on('line', function(line){
    var tokens = line.split(' ');
    inputArr.concat(tokens);
    if (count === 3){
        // console.log(inputArr.reduce((pre,item)=>{return pre+item}));
        inputArr.push(parseInt(line))
        console.log(inputArr)
    }else{
        inputArr.push(parseInt(line));
        count++;
    }
})
rl.on('close', function (){
    process.exit();
})


// var N, M;
// // 每组第一行是2个整数，N和M，至于为啥用while，因为是多组。
// while ((N=readInt()) != null && (M=readInt()) != null) {
//     print (N + ' ' + M);
//     // 循环读取“接下来的M行”
//     for (let i=0; i<M; i++) {
//         let a = readInt();
//         let b = readInt();
//         let c = readInt();
//         // 每行是3个整数，a，b，c。
//         print(a + ' ' + b + ' ' + c);
//     }
//     // M行读取完了，就又要开始下一组了，去while那里。
// }