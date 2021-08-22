function getUrlParam(sUrl, sKey) {
    let temp = sUrl.split('?')
    temp = temp[1].split('#')
    temp = temp[0];
    let arr = temp.split('&');
    let res = [];
    for(let i = 0; i < arr.length; i++){
        let [key, value] = arr[i].split('=');
        if(key === sKey){
            res.push(value);
        }
    }
    if (res.length === 1){
        return res.join('')
    }else {
        return res;
    }

}

// let sUrl = 'http://www.nowcoder.com?key=1&key=2&key=3&test1=4#hehe'
// let key = 'test1'
// let res = getUrlParam(sUrl,key)
// console.log(res === '4')
function fn() {
    var a = getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test1=4#hehe', 'test1');
    console.log(a)
    return a === '4';
}

function fn1() { var a = getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&key=4&test=4#hehe', 'key'); return a.join('') === '1234'; }
console.log(fn());
console.log(fn1())