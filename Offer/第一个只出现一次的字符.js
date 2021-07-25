/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
    let len = s.length;
    let set = new Set();
    for (let i = 0; i < len-1; i++) {
        let ch = s[i];
        if (set.has(ch)){
            continue;
        }else {
            let str = s.slice(i+1)
            if (str.indexOf(ch) === -1){
                return ch;
            }
        }
        set.add(ch);
    }
    if (!set.has(s[len-1])){
        return s[len-1];
    }
};

let s =  "abaccdeff";
console.log(firstUniqChar(s))

