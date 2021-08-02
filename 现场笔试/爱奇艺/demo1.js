// let input = [];
// while((line = read_line()) != ''){
//     input.push(line.split(' '))
// }




function toDecimal(x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
        return;
    }
    f = Math.round(x * 100) / 100;
    return f;
}

let input = [[2,2]];

for(let i = 0; i < input.length; i++){
    let a = parseInt(input[i][0]);
    let b = parseInt(input[i][1]);
    let res = 0;
    for(let j = 0; j < b; j++){
        res += a;
        a = Math.sqrt(a)
    }
    console.log(toDecimal(res))
}


