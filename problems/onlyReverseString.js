const str= "a!!!b.c.d,e'f,ghi";
const output= "i!!!h.g.f,e'd,cba";
const isAlphabet = (x) =>
{
    return ( (x >= 'A' && x <= 'Z') ||
             (x >= 'a' && x <= 'z') );
}

const onlyReverseString = (str) => {
    const array = str.split('');
    const reverSedarray = str.split('').reverse().filter((c) => isAlphabet(c));
    // console.log(reverSedarray)
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (!isAlphabet(array[i])) {
            result.push(array[i]);
        } else if (isAlphabet(reverSedarray[i]) && isAlphabet(str[i])) {
            result.push(reverSedarray.shift())
        } else {
            result.push(reverSedarray.shift())
        }
    }

    return output == result.join('');
}

console.log(onlyReverseString(str));