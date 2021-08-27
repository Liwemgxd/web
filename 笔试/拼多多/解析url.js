function parseParam(url){
    // if(localStorage.getItem(url).length > 0){
    //     return JSON.parse(localStorage.getItem(url))
    // }
    const paramsStr = /.+\?(.+)$/.exec(url)[1];
    const paramsArr = paramsStr.split('&');
    let paramsObj = {};
    paramsArr.forEach(param => {
        if(/=/.test(param)){
            let [key, val] = param.split('=');
            val = decodeURIComponent(val);
            val = /^\d+$/.test(val) ? parseFloat(val) : val;
            if(paramsObj.hasOwnProperty(key)){
                paramsObj[key] = [].concat(paramsObj[key], val);
            }else{
                paramsObj[key] = val;
            }
        }else{
            paramsObj[param] = true;
        }
    })
    // localStorage.setItem(url, JSON.stringify(paramsObj));
    return paramsObj;
}

let url = 'https://mail.qq.com/cgi-bin/frame_html?sid=c7sW4hQ-u-ze0lo7&r=4b6157f981788d7d75ff1f1a16cddf38'
console.log(parseParam(url));