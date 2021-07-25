/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if(s.length == 0 && p.length == 0){
        return true;
    }
    // if(s.length == 0 && p.length !== 0){
    //     return false;
    // }
    if(s.length !== 0 && p.length == 0){
        return false;
    }
    if(p[1] == '*'){
        if(p[0] == s[0] || (p[0] == '.' && s.length!==0)){
            return isMatch(s.slice(1), p.slice(2)) || isMatch(s.slice(1), p) || isMatch(s, p.slice(2))
        }else {
            return isMatch(s, p.slice(2))
        }
    }
    if(s[0] == p[0] || (p[0] == '.' && s.length!==0)){
        return isMatch(s.slice(1), p.slice(1))
    }

    return false;
};

let s = "aab";
let p = "c*a*b";

s = "mississippi"
p = "mis*is*p*."

console.log(isMatch(s, p))


// chars = s.split('');
// console.log(chars)
// console.log(chars[3])
// if(chars[3] == null){
//     console.log(true)
// }else{
//     console.log(false)
// }


