//http://www.baidu.com?aa=11&callback=my_jsonp04349289664328899
function jsonp(url, params, callback) {
    // 判断是否含有参数
    let queryString = url.indexOf("?") === "-1" ? "?" : "&";

    // 添加参数
    for (var k in params) {
        if (params.hasOwnProperty(k)) {
            queryString += k + "=" + params[k] + "&";
        }
    }

    // // 处理回调函数名
    // let random = Math.random()
    //         .toString()
    //         .replace(".", ""),
    //     callbackName = "myJsonp" + random;
    //
    // // 添加回调函数
    let callbackName = 'MyCallbackName'
    queryString += "callback=" + callbackName;

    // 构建请求
    let scriptNode = document.createElement("script");
    scriptNode.src = url + queryString;

    window[callbackName] = function() {
        // 调用回调函数
        callback(...arguments);

        // 删除这个引入的脚本
        document.getElementsByTagName("head")[0].removeChild(scriptNode);
    };

    // 发起请求
    document.getElementsByTagName("head")[0].appendChild(scriptNode);
}

jsonp("Https://www.imooc.com/api/http/jsonp?",
    {},
    function(){console.log(arguments);}
)

//首先保证后端会根据传入的callback = callbackname，返回一个callbackname(params)的函数；params是由后端填进去的
//相当于 callback是定义的一个函数，起个名字callbackname传给后端，并在window对象上注册一下：window[callbackname] = function(){callback}
//然后全局作用域就有callbackname这个方法了
//后端返回一个 callbackname(params);