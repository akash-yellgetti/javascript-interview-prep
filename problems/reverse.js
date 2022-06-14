/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(num) {
  let rev = 0;
  let lastDigit;
  let negativeFlag = false;
  if (num < 0)
  {
      negativeFlag = true;
      num = -num ;
  }

  while(num != 0){
    lastDigit = num % 10;
    // console.log(lastDigit)
    if (lastDigit > 7) return 0;
    if (lastDigit < -8) return 0;
    rev = rev * 10 + lastDigit;
    num = Math.floor(num/10);
  }
  return (negativeFlag == true) ? -rev : rev;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(123456));
console.log(reverse(1534236469));