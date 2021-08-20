let num = 3.1415926;
let temp = num.toString().split('.');
temp[temp.length-1] = temp[temp.length-1].slice(0,2);
console.log(temp)
let newNum = eval(temp.join('.'))
console.log(newNum === 3.14)