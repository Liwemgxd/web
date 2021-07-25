/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.arr = [];
    this.arr.sort((a,b)=>a-b);
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.arr.push(num);
    //this.arr.sort();
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let len = this.arr.length;
    if (len === 0) return undefined;
    if (len === 1) return this.arr[0];
    if (len%2===0){ //长度为偶数
        let left = len/2 -1;
        let right = len/2+1-1;
        console.log(this.arr)
        console.log(left)
        console.log(right)
        console.log(this.arr[left])
        console.log(this.arr[right])
        return (this.arr[left]+this.arr[right])/2;
    }else {
        let mid = parseInt(len/2);
        return this.arr[mid];
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

// let  obj = new MedianFinder()
// obj.addNum(1)
// obj.addNum(2)
// obj.addNum(3)
// obj.addNum(4)
// obj.addNum(5)
// obj.addNum(6)
// obj.addNum(7)
// obj.addNum(8)
// obj.addNum(9)
// obj.addNum(10)
// let  param_2 = obj.findMedian()
// console.log(param_2)

