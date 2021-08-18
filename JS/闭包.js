function createFunctions(){
    var result = new Array();

    for(let i=0; i < 10; i++){
        result[i] = function(){
            console.log(i);
        }
    }
    return result;
}

var result = createFunctions();

result[0](); // 9
result[1](); // 9
result[2](); // 9
result[3](); // 9
result[4](); // 9
result[5](); // 9