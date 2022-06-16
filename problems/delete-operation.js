/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const str = word1.length > word2.length ? word2 : word1;
    const str2 = word1.length < word2.length ? word1 : word2;
    const r = [];
    if(str2.length > 1 || str1.length > 1) {
      return r.length;
    }

    for(const j of str) {
        if(str2.indexOf(j) > -1) {
            r.push(j)
        }
    }
    return r.length;
};
// console.log(minDistance('leetcode', 'etco'))
console.log(minDistance('a', 'a'))
