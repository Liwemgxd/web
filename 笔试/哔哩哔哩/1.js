

function isEmail(str){
    // var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
    return reg.test(str);
}


let arr = ["bilibili.com", "master@bilibili.com", "test.bilibili@bilibili.com", "test@bilibili.biliil.com", "test.bilibili.com", "test.bili@bili.com"];
let res = [];
for (let i = 0; i < arr.length; i++) {
    if(!isEmail(arr[i])){
        res.push(arr[i])
    }
}

console.log(JSON.stringify(res))

   // ["bilibili.com","test.bilibili.com"]