const input =  [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
const output =  [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4];
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const digit = BigInt(digits.join(""))+BigInt(1);
    return digit.toString().split("");
};

console.log(plusOne(input))