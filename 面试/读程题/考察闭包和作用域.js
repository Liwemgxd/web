
for(var i = 0; i < 5; i++) {
    let out = i;
    setTimeout(function()  {
        console.log(out);
    }, 2000)
}

for(var i = 0; i < 5; i++) {
    setTimeout(function(){
        console.log(i);
    }, 2000)
}

for(let i = 0; i < 5; i++) {
    setTimeout(function(){
        console.log(i);
    }, 2000)
}