function Router(){
    this.routes = {};
    this.currentUrl = '';
}
//注册路由
Router.prototype.route = function (path, callback){
    this.routes[path] = callback;
}

//路由更新，执行函数
Router.prototype.refresh = function (){
    this.currentUrl = location.hash.slice(1);
    this.routes[this.currentUrl]();
}

//为页面绑定路由监听
Router.prototype.init = function (){
    window.addEventListener('load', this.refresh.bind(this), false);
    window.addEventListener('hashchange', this.refresh.bind(this), false);
}

window.Router = new Router();
window.Router.init();
window.Router.route('/liwemg', function (){});

