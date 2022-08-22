// const input = [2,6,8,0,2,5,7,0,3,0,6]
const input = [1, 2, 3]


// const iteration = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//       // console.log(arr[i], arr[j]);
//       if(arr[i] === 0) {
//         input[i] = input[j];
//         input[j] = 0;
//         // console.log(input)
//       }
//     }
//   }
// }

// const iteration = (arr) => {

//   const swap = (input, i, j) => {
//     const temp = input[j];
//     input[j] = input[i];
//     input[i] = temp;
//   }
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//       if(arr[i] != 0) {
//         swap(input, i, j);
//         j++;
//       }
//   }

//   return input;
// }
//
//

const iteration = (arr) => {
    const a = [];
    const pairs = (input, i, j) => {
      return [input[i], input[j]]
    }
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        j = j+1;
        if(j < arr.length) {
          a.push(pairs(input, i, j));
        }

    }
    return a;
}



console.log(iteration(input))