/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        let temp = [];
        temp.push(s[i]);
        for (let j = i+1; j < s.length; j++) {
            if (temp.indexOf(s[j]) !== -1){
                break;
            }else {
                temp.push(s[j]);
            }
        }
        max = temp.length>max? temp.length : max;
    }
    return max;
};

let str = "abcabcbb";
str = ' '
// console.log(lengthOfLongestSubstring(str))
//
// let map = new Map();
// map.set('a',1);
// map.set('a',2);
// let i = map.get('a')? map.get('a'):-1
// console.log(i)
// console.log(map.get('b'))

/**
 *滑动窗口方法
 * @param s
 * @return {number}
 */
const lengthOfLongestSubstring1 = function(s) {
    let map = new Map();
    let res = 0;
    let start = 0;
    for (let end = 0; end < s.length; end++) {
        if (map.has(s[end])){
            start = Math.max(start, map.get(s[end])+1);
        }
        map.set(s[end], end);
        res = Math.max(res, end - start + 1);
    }
    return res;
};

var lengthOfLongestSubstring2 = function(s) {
    const length = s.length;
    const map = new Map();
    let i = 0,
        j = 0;
    let ans = 0;
    while (i < length && j < length) {
        // 容易理解：检查s[j]是否出现过，并且s[j]重复的字符是否在当前的滑动窗口中
        if (map.has(s[j]) && map.get(s[j]) >= i) {
            i = map.get(s[j]) + 1;
        }
        ans = Math.max(j - i + 1, ans);
        map.set(s[j], j);
        ++j;
    }
    return ans;
};

console.log(lengthOfLongestSubstring1(str))
console.log(lengthOfLongestSubstring2(str))
