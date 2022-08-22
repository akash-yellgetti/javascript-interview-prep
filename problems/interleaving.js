let s1 = "aabcc", s2 = "dbbca";
// s3 = "aadbbcbcac"
let s3 = "aadbcbbcac"
// let s1 = "aa", s2 = "ab", s3 = "aaba"

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {



    iterate = (s1, s2, s3) => {
        const s1Arr = s1.split('');
        const s2Arr = s2.split('');
        const s3Arr = s3.split('');
        let currentArr = s1Arr;;
        for(let i in s3Arr) {
            const ele = s3Arr[i];
            if(currentArr[0] === ele) {
                currentArr.shift()
            } else {
                currentArr = currentArr === s1Arr ? s2Arr : s1Arr;
                if(currentArr[0] === ele) {
                    currentArr.shift()
                } else {
                  return false
                }
            }
        }
        return s1Arr.length === 0 && s2Arr.length === 0 ? true : false;

    }

    return iterate(s1, s2, s3) || iterate(s2, s1, s3);
}


console.log(isInterleave(s1, s2, s3));