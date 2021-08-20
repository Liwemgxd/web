

const SERVER_URL = "https://www.fastmock.site/mock/3318e12fecf0186fad855028d64347e9/weixin/api/getData";

const ajaxXMLHTTPRequest = function (method, url, boolean){
    let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    let xhr = new XMLHttpRequest();

    xhr.open(method, url, boolean);
    xhr.onreadystatechange = function (){
        if (this.readyState === 4) {
            if (this.status === 200 || this.status === 304){
                let {data} = JSON.parse(this.responseText);
                console.log(data.swiperList);
            }else {
                console.error(this.status)
            }
        }

    }
    xhr.setRequestHeader('accept', 'application/json');
    xhr.send(null);
}
ajaxXMLHTTPRequest('get', SERVER_URL, true);

