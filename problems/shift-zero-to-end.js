

// const input = [2,6,8,0,2,5,7,0,3,0,6]
// const output =[2,6,8,2,5,7,3,6,0,0,0]

// for(const i in input) {
//   let index = i;
//   while(input[index] === 0) {
//     index++;
//   }

//   if(input[i] === 0 && index < input.length){
//     input[i] = input[index];
//     input[index] = 0;
//   }
// }
// console.log(input)
//
//
const input = [2,6,8,0,2,5,7,0,3,0,6]
const output =[2,6,8,2,5,7,3,6,0,0,0]
const len = input.length;
for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
        if(input[i] === 0){
          input[i] = input[j];
          input[j] = 0;
        }
    }
}

console.log(input)