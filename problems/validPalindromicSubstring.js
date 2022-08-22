// const input = "A";
// const input = "AC";
// const input = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
// const uniqueChars = new Set(input)




const input = "SENDABCBASS";
let validPalindromicSubstrings = [];
let validPalindromicSubstring = "";

// console.log(uniqueChars)


    const o = {};

    for(let i in input) {
        let letter = input[i];
        o[letter] = o[letter] ? [...o[letter], i]: [i];

    }

    // console.log(o)

    createCombination = (array) => {
        const combinationArray = []
        for (let i = 0; i < array.length; i++) {
            for (let j = i+1; j < array.length; j++) {
                combinationArray.push([array[i], array[j]]);
            }
        }
        return combinationArray;
    }

    let substrings = [];
    for(let i in o) {
        const arr = o[i];
        const combinationArray = createCombination(arr);
        // console.log(combinationArray)
        if(combinationArray && combinationArray.length > 0) {
            substrings = combinationArray ? [...substrings, ...combinationArray] : [...substrings];
        }
    }





    for(let i in substrings) {
        let substring = substrings[i]
        let str = input.substring(substring[0], parseInt(substring[1])+1);
        let reverseStr = str.toString().split("").reverse().join("");
        if(str == reverseStr) {
            validPalindromicSubstrings.push(str);
            if(str.length > validPalindromicSubstring.length) {
                validPalindromicSubstring = str;
            }
        }

    }

console.log(validPalindromicSubstring)
console.log(validPalindromicSubstrings)