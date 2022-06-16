/*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

*/





// Input:
// l1 = [2,4,3], l2 = [5,6,4]
l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]

// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
l3 = [];
let carry = 0
for (let i = 0; i < l1.length; i++) {
    // for (let j = 0; j < l2.length; j++) {
      let res = l1[i]+parseInt(l2[i] || 0)+parseInt(carry);
      // console.log('split', res.toString().split('')[0])
      // carry = 0;
      // let r = res >= 10 ? res % 10 : res;
      // carry = res >= 10 ? res.toString().split('')[0] : carry;
      // console.log('carry', carry)
      // l3[i] = parseInt(r);

    // }
}

console.log(l3)