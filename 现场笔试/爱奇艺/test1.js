// let arr = '1 2 2 1 2 3 1 -123 345 5 4 6'
let arr = '1 2 2 3 1'
arr = arr.split(' ').map(Number);
console.log(arr)


let set = new Set();
let len = arr.length;

for(let i = 0; i < len; i++){
    let cur = arr.shift();
    if (set.has(cur)){
        continue;
    }else {
        if(arr.indexOf(cur) === -1){
            console.log(i);
            break;
        }
    }
    set.add(cur);
}

