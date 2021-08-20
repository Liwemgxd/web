/**
 *浅拷贝
 */

function shallowCopy(object){
    if (typeof object !== 'object' || !object){
        return object;
    }
    let newObj = Array.isArray(object)? [] : {};
    for(let key in object){
        if(object.hasOwnProperty(key)){
            newObj[key] = object[key];
        }
    }
    return newObj;
}

/**
 * 深拷贝
 */

function deepCopy(object){
    if (typeof object !== 'object' || !object){
        return object;
    }
    let newObj = Array.isArray(object)? [] : {};
    for(let key in object){
        if(object.hasOwnProperty(key)){
            newObj[key] = deepCopy(object[key]);
        }
    }
    return newObj;
}
