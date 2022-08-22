/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotateArray = function(nums, k) {
     
    const len = nums.length - 1;
    const newArr = []
    for (let i = 0; i < k; i++) {
        newArr.push(nums[len - i])
        nums.length = Math.max(0, nums.length - 1)
        
    }
    
    // return [...newArr,...nums];
    return newArr.concat(nums);
};


let nums = [1,2,3,4,5,6,7], k = 3
// let nums = [-1,-100,3,99], k = 2
rotateArray(nums, k)
// console.log()