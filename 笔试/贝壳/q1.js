// function compare(s1, s2){
//     let len1 = s1.length;
//     let len2 = s2.length;
//     let i = 0, j = 0;
//     while(i < len1 && j < len2){
//         if (s1[i])
//     }
// }

function fn(arr){
    let len = arr.length;
    let map = new Map();
    //单词和数量都存入字典
    for (let i = 0; i < len; i++) {
        let cur = arr[i].toLowerCase();
        if (map.has(cur)){
            let pre = map.get(cur);
            map.delete(cur);
            map.set(cur, pre + 1)

        }else {
            map.set(cur, 1)
        }
    }
    let maxCount = 0;
    let resWord = [];
    for (let item of map){

        let word = item[0];
        let count = item[1];
        if (count > maxCount){
            maxCount = count;
            resWord = word;
        }
    }
    let resWords = [];
    for (let item of map){
        if (item[1] === maxCount){
            resWords.push(item[0])
        }
    }
    if (resWords.length > 1){
        for (let i = 0; i < resWords.length; i++) {
            if (resWords[i] < resWord){
                resWord = resWords[i];
            }
        }
    }
    console.log(resWord, maxCount)
}

// let arr = ['Nice', 'to', 'meet', 'you', 'I', 'can', 'help', 'you', 'thank', 'you', 'to', 'to'];
let arr = ['4', 'B', 'b', 'c', 'ad']
fn(arr)
