//类数组是具有length属性，但不具有数组原型上的方法。常见的类数组有arguments、DOM操作方法返回的结果。

/**
 *
 */
Array.from(document.querySelectorAll('div'))

Array.prototype.slice.call(document.querySelectorAll('div'));

//扩展运算符
[...document.querySelectorAll('div')]

//