// const input = [ "U", "D"];
// const input = [ "U", "U", "D", "D"];
// const input = [ "D", "U"];
// const input = [ "D", "D", "U", "U"];

const input = ["U", "D", "D", "D", "U", "D","U", "U", "D", "U"];
// const input = [ "D", "U"];
// const input = ["U",  "D", "D", "U"];

const stack = [];
const heap = {
    "U": "D",
    "D": "U",
}
const types = ["sea", "mountain", "valley"];
let currentLevel = types[0];

for(let i in input) {
    const direction = input[i];
    if([types[0], types[1]].indexOf(currentLevel) > -1 && direction === 'U') {
        currentLevel = types[1];
        stack.push("D");
    } else if(currentLevel === types[1] && direction === 'D') {
        stack.pop();
        currentLevel = stack.length === 0 ? types[0] : currentLevel;
    } else if([types[0], types[2]].indexOf(currentLevel) > -1 && direction === 'D') {
        currentLevel = types[2];
        stack.push("U");
    } else if(currentLevel === types[2] && direction === 'U') {
        stack.pop();
        currentLevel = stack.length === 0 ? types[0] : currentLevel;
    }
    console.log(currentLevel, stack)
}

// console.log(stack)