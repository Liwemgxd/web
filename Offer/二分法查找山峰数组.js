



var peakIndexInMountainArray = function(arr) {
    let len = arr.length;
    let left = 1;
    let right = len-1;
    while(left<right){
        let mid = Math.floor((left+right+1)/2);
        if(arr[mid]>arr[mid-1]){
            left = mid;
        }else {
            right = mid-1;
        }
    }
    return left;
};

let arr = [1,2,3,4,9,1];
console.log(peakIndexInMountainArray(arr))

