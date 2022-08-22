

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

let n = input.length;
let m = 0;
function swap(input,j,i){
  temp = input[j];
  input[j] = input[i];
  input[i] = temp
}
for(let i=0;i<n;i++){
  if(input[i] != 0){
    console.log(i, m)
    swap(input,m,i);
    m++;
  }

  console.log(input)
}


console.log(input)