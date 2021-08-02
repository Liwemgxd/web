

function convertToCamelCase(str) {
    // 去除中划线分隔符获取单词数组
    var strArr = str.split('-');
    // 如果第一个为空，则去掉
    if(strArr[0] === '') {
        strArr.shift();
    }
    // 遍历第二个单词到最后一个单词，并转换单词首字母为答谢
    for(var i = 1, len = strArr.length; i < len; i++){
        // 如果不为空，则转成大写
        if(strArr[i] !== '') {
            strArr[i] = strArr[i][0].toUpperCase() + strArr[i].substring(1);
        }
    }
    return strArr.join('');
}

let str = 'TestVar'
// let str = 'test_var'
// let str = 'TEST_VAR'

function convert(str){
    let arr = [];
    if (str.indexOf('_') !== -1){
        arr = str.split('_');
        //先把第一个转换为小写
        arr[0] = arr[0].toLowerCase();
        for(let i = 1, len = arr.length; i < len; i++){
            // 如果不为空，先都转成小写，再把第一个转成大写
            if(arr[i] !== '') {
                arr[i] = arr[i].toLowerCase();
                arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
            }
        }
        return arr.join('')
    } else {
        arr = str.split('');
        arr[0] = arr[0].toLowerCase();
        return arr.join('');
    }
}

console.log(convert(str))