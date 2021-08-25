

function findKthBit( n ,  k ) {
    let map = new Map();
    // write code here
    for (let i = 0; i < 26; i++) {
        let key = String.fromCharCode('a'.charCodeAt() + i);
        let value = String.fromCharCode('z'.charCodeAt() - i);
        map.set(key, value);
    }
    var s = 'a';
    for (let i = 1; i < n; i++) {
        s = core(s, i, map);
    }
    return s[k-1];
}

function core(s, n, map){
    let temp = s.split('');
    for (let i = 0; i < temp.length; i++) {
        temp[i] = map.get(temp[i]);
    }
    temp = temp.reverse();
    let res = temp.join('')
    return s + String.fromCharCode('a'.charCodeAt() + n) + res;
}

console.log(findKthBit(3,1))
console.log(findKthBit(4,11))
// let str = 'a';
// let a_code = str.charCodeAt();
// console.log(a_code)
// console.log(String.fromCharCode(a_code+1))
// console.log(String.fromCharCode('a'.charCodeAt() + 1));
// let value = String.fromCharCode('z'.charCodeAt() - 2);
// console.log(value)