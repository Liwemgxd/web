const EventUtils = {
    //依次使用了DOM2， IE，DOM0标准
    addEvent: function (element, type, handler){
        if(element.addEventListener){
            element.addEventListener(type, handler, false);
        }else if (element.attachEvent){
            element.attachEvent('on' + type, handler);
        }else {
            element['on'+type] = handler;
        }
    },

    removeEvent: function (element, type, handler){
        if(element.removeEventListener){
            element.removeEventListener(type, handler);
        }else if (element.detachEvent){
            element.detachEvent('on' + type, handler);
        }else {
            element['on' + type] = null;
        }
    },

    //获取事件目标
    getTarget: function (event){
        return event.target || event.srcElement;
    },

    //获取event对象的引用，取到事件的所有信息，确保能随时使用event
    getEvent: function (event){
        return event || window.event;
    },

    //组织事件传播
    stopPropagation: function (event){
        if (event.stopPropagation){
            event.stopPropagation();
        }else {
            event.cancelBubble();
        }
    },

    //阻止事件默认行为
    preventDefault: function (event){
        if (event.preventDefault){
            event.preventDefault();
        }else {
            event.returnValue = false;
        }
    }
}

