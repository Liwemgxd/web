let arr1 = [2,4,6,8,10];
let arr2 = [1,3,5,7,9];
let res = [];
let len1 = arr1.length;
let len2 = arr2.length;
let p1 = 0, p2 = 0;
// console.log(p1, p2)
while(p1 < len1 && p2 < len2){
    if(arr1[p1] >= arr2[p2]){
        res.push(arr2.shift());
        p2++;
//         console.log(p1)
    }else{
        res.push(arr1.shift());
        p1++;
//         console.log(p2)
    }
}
console.log(p1,arr1)
console.log(p2,arr2)
if(p1< len1){
    res.concat(arr1);
}
if(p2< len2){
    res = [...res,...arr2]
}
console.log(res)