// function f (e, a) {
//     let result = -1
//     for (let i = 0; i < a.length; i++) {
//         const element = a[i];
//         if(a[i] === e)
         
//     }

//     return result;
// }


// let x = ['1', '2', '15', '-7', '300']
// let y = x.sort();
// console.log(y)


// function deleteBlankItems(items) {
//     for (let i = 0; i < items.length; i++) {
//         // const element = items[i];
//         if(items[i].length == 0) {
//             items.splice(i, 1)
//         }
//     }
//     console.log(names);
// }

// const names = ['Rachel', '', 'Meghana', '', '', 'Tim'];
// console.log(deleteBlankItems(names));


// function buildWordTreeFromSentences(sentenceList) {
//     let root = {}
//     sentenceList.forEach(sentence => {
//       let base = root
//       sentence.split(' ').forEach(word => {
//         if (base[word] === undefined) {
//           base[word] = {}
//         } 
//         base = base[word]
//       })
//     })
//     return root
//   }
  
//   let tree = buildWordTreeFromSentences(['Hello world', 'Hello there'])

//   console.log(tree)



// function func(a, b) {
//     a += 1
//     b.push(1)
//   }
//   const a = 0
//   const b = []
//   func(a, b)
//   console.log(a, b)


// function hasPosNeg(array) {
//     let hasPos = false
//     let hasNeg = false
  
//     array.forEach(num => {
//       hasPos = num > 0
//       hasNeg = num < 0
//     })
  
//     return [hasPos, hasNeg]
//   }




const promises = [3, 2, 1].map(d => (
    new Promise(resolve => {
      setTimeout(() => {
        resolve(d)
      }, d * 1000)
    })
  ))
  
  Promise.race(promises).then((val) => {
    console.log(val)
  })

// function findFirstPosition(arr, fn) {
//     let pos = false;
//     for(let i = 0; i < arr.length; i++) {
//       let row = arr[i];
//       for(let j = 0; j < row.length; j++) {
//         if (fn(row[j])) {
//           pos = [i, j];
//           break;
//         }
//       }
//     }
//     return pos;
//   }