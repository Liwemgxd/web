function sleep(time){
    return new Promise(resolve => setTimeout(resolve, time))
}

sleep(5000)
console.log('ok')