/**
 * bind与apply/call一样都能改变函数this指向，
 * 但bind并不会立即执行函数，而是返回一个绑定了this的新函数，你需要再次调用此函数才能达到最终执行。
 *Javascript的函数还可以作为构造函数，那么绑定后的函数用这种方式调用时，情况就比较微妙了,需要考虑new的情况
 */

Function.prototype.bind = function(context, ...args) {
    if(typeof this !== 'function'){
        throw new TypeError('type error');
    }
    //保存this的值，因为在下面的返回函数中，this会发生变化
    let self = this;

    return function F(){
        //考虑new的情况
        if(this instanceof F){
            return new self(...args, ...arguments);
        }
        return self.apply(context, [...args, ...arguments]);
    }
}