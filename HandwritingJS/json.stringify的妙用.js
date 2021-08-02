//json.stringify()的作用是将JS对象转换为json字符串，json.parse()可以将json字符串转换为一个对象

//在使用JSON.parse()需要注意一点，由于此方法是将JSON字符串转换成对象，所以你的字符串必须符合JSON格式，即键值都必须使用双引号包裹

/**
 * 作用一：判断数组是否包含对象
 */
let data = [{name: 'liwemg'},{name: '天子笑'}], val = {name: '天子笑'};
let flag = JSON.stringify(data).indexOf(JSON.stringify(val)) !== -1;
console.log(flag) //true

/**
 * 作用二： 判断对象是否相等
 */
let a = [1,2,3], b = [1,2,3];
console.log(a==b)  //false
console.log(JSON.stringify(a) === JSON.stringify(b))  //true

/**
 * 作用三：让localStorage、sessionStorage可以存储对象
 * localStorage/sessionStorage默认只能存储字符串，而实际开发中，我们往往需要存储的数据多为对象类型，
 * 那么这里我们就可以在存储时利用json.stringify()将对象转为字符串，而在取缓存时，只需配合json.parse()转回对象即可。
 */
//存
function setLocalStorage(key, val){
    window.localStorage.setItem(key, JSON.stringify(val));
}
//取
function getLocalStorage(key){
    return JSON.parse(window.localStorage.getItem(key));
}

/**
 * 作用四：实现对象深拷贝
 */
function deepClone(data){
    let _data = JSON.stringify(data);
    let dataClone = JSON.parse(_data);
    return dataClone;
}

/**
 * JSON.stringify 和 toString()的区别
 * JSON.stringify()的受众更多是对象，而toString()虽然可以将数组转为字符串，但并不能对{name:'天子笑'}这类对象实现你想要的操作，它的受众更多是数字
 */
let arr = [1,2,3];
console.log(JSON.stringify(arr))
console.log(arr.toString())





