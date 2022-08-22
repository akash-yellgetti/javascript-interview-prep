const arr = [2, 2, 3, 3]
// const arr = [1, 2, 2, 3, 3, 3]




const luckyNumbers = () => {
    const res = {};
    for (const i in arr) {
        res[arr[i]]  = res[arr[i]] ? parseInt(res[arr[i]])+1 : 1;
    }
    const result = [];
    for (const i in res) {
        if(res[i] == i) {
            result.push(i)
        }
    }

    return result.length > 0 ? result : -1;
}



console.log(luckyNumbers(arr))