/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const data = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let sum = 0;
    const str = s.split('').reverse();
    // console.log(str);
    for(let i in s) {
      if(["V", "X"].indexOf(s[parseInt(i)+1]) > -1 && "I" == s[i]) {
        sum -= data[s[i]];
      } else if(["L", "C"].indexOf(s[parseInt(i)+1]) > -1 && "X" == s[i]) {
        sum -= data[s[i]];
      } else if(["D", "M"].indexOf(s[parseInt(i)+1]) > -1 && "C" == s[i]) {
        sum -= data[s[i]];
      } else {
        sum += data[s[i]];
      }
    }

    return sum;
};


console.log(romanToInt("MCMXCIV"))
console.log(romanToInt("LIV"))
console.log(romanToInt("LVIII"))

// var romanToInt = function(s) {


//     // Map to store romans numerals
//     const romanMap = new Map();
//     // Fill the map
//     romanMap.set('I', 1);
//     romanMap.set('V', 5);
//     romanMap.set('X', 10);
//     romanMap.set('L', 50);
//     romanMap.set('C', 100);
//     romanMap.set('D', 500);
//     romanMap.set('M', 1000);
//     // Length of the given string
//     const n = s.length;
//     // Variable to store result
//     let num = romanMap.get(s[n - 1]);
//     // Loop for each character from right to left
//     for (let i = n - 2; i >= 0; i--) {
//         // Check if the character at right of current character is
//         // bigger or smaller
//         if (romanMap.get(s[i]) >= romanMap.get(s[i + 1])) {
//             num += romanMap.get(s[i]);
//         } else {
//             num -= romanMap.get(s[i]);
//         }
//     }
//     return num;
// };