 
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let longestPalindromeSubstring = s.length === 1 ? s : '';
    const substring = [];
    for (let i = 0; i < s.length; i++) {
        const ei = s[i];
        let ss = ei
        substring.push(ss);
        for (let j = i+1; j < s.length; j++) {
            const ej = s[j];
            ss += ej;
            substring.push(ss);
            // console.log(ss.split('').reverse().join(''));
            if(ss == ss.split('').reverse().join('') && longestPalindromeSubstring.length < ss.length) {
                longestPalindromeSubstring = ss;
            }
        }
    }

    longestPalindromeSubstring = s.length === 2 && longestPalindromeSubstring.length === 0 ? s[0] : longestPalindromeSubstring;
    return longestPalindromeSubstring;
};
console.log(longestPalindrome("abcda"))
// console.log(longestPalindrome("babad"))
// console.log(longestPalindrome("ac"))
// console.log(longestPalindrome("abb"))
// console.log(longestPalindrome("a"))