/**
 * 防抖： 频繁触发后，只执行一次
 * 在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。
 * 表单提交，避免点击太快
 */

function debounce(fn, wait){
    let timer = null;
    return function (){
        let that = this;
        let args = arguments;
        if (timer){
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(()=>{
            fn.call(that, ...args)
        }, wait)
    }
}

/**
 * 节流： 固定事件段内，只触发一次
 * 规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果一个单位时间内某事件被触发多次，只有一次能生效
 * scroll事件，搜索框实时搜索
 */

function throttle(fn, delay){
    let flag = true;
    return function (){
        if (!flag) return;
        let that = this;
        let args = arguments;
        flag = false;
        setTimeout(()=>{
            fn.apply(that, args);
            flag = true;
        }, delay)
    }
}
