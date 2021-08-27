function compare(a, b){
    let arr_a = a.split('.');
    let arr_b = b.split('.');
    for(let i=0; i < 3; i++){
        if(arr_a[i] < arr_b[i]){
            return false;
        }
    }
    return true;
}

let a = '1.1.0', b = '1.2.1';
console.log(compare(a , b))
