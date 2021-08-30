// var a = 100;
// var a;
// console.log(a)
// function fn(a){
//     // var a;
//     console.log(a)
// }
//
// let b = 101;
// function fn1(){
//     console.log(b)
// }
//
// fn()
// fn1()


/**
 * 加var和不加var的区别，var 与 let的对比
 * let不但会禁止a使用外部作用域的a，而且会形成暂时性死区
 * @type {number}
 */
// var a =123
// function fn(){
//     console.log(a);
//     // a = 456;
//     // let a = 456;
//     // var a = 456
// }
// fn()


/**
 * 函数参数，相当于在该作用域定义了一个变量，但是没赋值
 * @param a
 */
// var a = 123;
// function fn(a){
//     console.log(a)
//     a = 456;
//     console.log(a)
// }
// fn()


// var a = 123;
// function fn(b,c){
//     console.log(a)
// }
// fn()


// var a = 123;
// function fn(b,c){
//     console.log(a)
//     a = b+c;
//     console.log(a)
// }
// fn(10,20)


// var to=1;
// function fn(n1,n2) {
//     console.log(to)
//     to = n1 + n2
//     console.log(to)
//     fn(10, 20)
// }
// fn(10,20)
// console.log(to)


/**
 * 深入理解变量提升
 * @param a
 */
// function fn(a){
//     console.log(a)
//     var a=123
//     console.log(a)
//     // var a = function (){
//     //     console.log('ok')
//     // }
//     // a();
//     function a(){};
//     console.log(Object.prototype.toString.call(a))
//     console.log(a)
//     var b=function(){}
//     console.log(b)
//     function d(){}
// }
//
// fn(1)


/**
 * 奇怪的变量d，竟然会默认被当做window下的变量
 */
// function fn(){
//     var a = 1;
//     var b = 2;
//     var c = d = b;
//
// }
// fn();
// // console.log(a)
// console.log(d)


var obj = {
    val: 2,
    db1: function (){
        var val = 45;
        console.log(val)
        console.log(this);
        this.val = val;
        console.log(val)
        console.log(this.val)
    }
}
obj.db1()