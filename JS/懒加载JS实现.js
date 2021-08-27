// <img src="javascript:;" data-src="https://xxxx/real.png">

//判断元素是否可见
function isVisible(el){
    let position = el.getBoundingClientRect();
    const windowHeight = document.documentElement.clientHeight;
    if (position.top < windowHeight && position.bottom > 0){
        return true;
    }else{
        return false;
    }
}

function lazyLoad(){
    const images = document.querySelectorAll('img');
    for (let img of images){
        let realSrc = img.dataset.src
        if (realSrc== ''){
            continue;
        }
        if(isVisible(img)){
            img.src = realSrc;
            img.dataset.src = '';
        }
    }
}

window.addEventListener('load', lazyLoad, false);
window.addEventListener('scroll', lazyLoad, false);