/**
 * @param {number} n
 * @return {number}
 */
 var arrangeCoins = function(n) {
    let i = 1
    while (n > i) {
        // console.log(n, i)
        n -= i;
        // console.log(n)
        i = n > i ? i+1 : i; 
    }
    // console.log(i)
    
    return i
};

console.log(arrangeCoins(5))