let line = '[1,3,4,6,9]';
line = JSON.parse(line)
// line = line.slice(1,line.length-1)

function findTarget(arr, target){
    let set = new Set();
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if(set.has(target-arr[i])){
            return true;
        }else {
            set.add(arr[i]);
        }
    }
    return false;
}


console.log(findTarget(line, 10))