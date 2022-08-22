const inputs = ["5", "-2", "4", "C", "D", "9", "+", "+"]
const output = 27

const arr = [];
let current = 0;
let previous = 0;

for (let i = 0; i < inputs.length; i++) {
    
    current = inputs[i];

    if(current === "D") {
        previous = arr[arr.length-1];
        const val = 2*previous;
        arr.push(val);
    } else if(current === "C") {
        arr.pop();
    } else if(current === "+") {
        let val = arr[arr.length-1] + arr[arr.length-2];
        arr.push(val);
    } else {
        arr.push(parseInt(inputs[i]))
    }
}

console.log(arr)