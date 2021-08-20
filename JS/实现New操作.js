
const objectFactory = function (...arguments){
    //1 创建一个空对象
    let newObject = null;

    let constructor = arguments.shift();
    let result;
    if (typeof constructor !== 'function'){
        console.error('error')
    }
    //2、实例化对象，并让对象的原型指向构造函数的prototype
    newObject = Object.create(constructor.prototype)

    //3、构造函数this指向对象，执行构造函数
    result = constructor.apply(newObject, arguments);
    //4、判断构造函数返回值类型，如果是引用类型，直接返回引用类型，否则返回该对象
    if (result && (typeof result === 'object' || typeof result === 'function')){
        return result;
    }else {
        return newObject;
    }
}

function father(name){
    this.name = name;
}

let me = objectFactory(father, 'liwemg');
console.log(me.constructor)
console.log(me instanceof father)



