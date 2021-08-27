let obj = {
    name: null,
    age: 18,
    sex: 'boy'
}

let keys = Object.keys(obj);
keys.forEach(key => {
    if (obj[key] === null){
        delete obj[key];
    }
})

console.log(obj)