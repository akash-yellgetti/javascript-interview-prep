const nums = [3,2,2,3];
const val = 3;

// const nums = [4,4,0,1,0,2];
// const val = 0;
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {

//     for(let i in nums) {
//         if(nums[i] == val) {
//           // console.log('dds')
//             nums[i] = "_";
//         }
//     }
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i+1; j < nums.length; j++) {
//             if(nums[i] == "_"){
//                 // console.log("hi")
//                 nums[i] = nums[j];
//                 nums[j] = "_";
//             }
//         }
//     }

//     return nums.filter(r => r != val).length;
// };
//
//
var removeElement = function(nums, val) {

    for(let i in nums) {
        if(nums[i] == val) {
          // console.log('dds')
            nums[i] = "_";
        }
    }
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] == "_"){
                // console.log("hi")
                nums[i] = nums[j];
                nums[j] = "_";
            }
        }
    }

    return nums.filter(r => r != val).length;
};


console.log(removeElement(nums, val))