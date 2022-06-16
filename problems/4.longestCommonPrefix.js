var longestCommonPrefix = function(array) {
    let prefix = '';

    if(array.length === 0) return prefix;

    for (let i = 0; i < array[0].length; i++) {
        const char = array[0][i];
        for (let j = 0; j < array.length; j++) {
            if(array[j][i] != char) return prefix;
        }
        prefix +=char;
    }
    return prefix;

};

console.log(longestCommonPrefix(["flower","flow","flight"]))