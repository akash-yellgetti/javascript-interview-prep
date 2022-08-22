const board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
// Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
//
//
//

getRow = (i, j, board) => {
  const elements = [];
  for(let k = 0; k < 9; k++) {
    if(board[i][k] && board[i][k] != ".") {
      elements.push(board[i][k])
    }
  }
  return elements;
}

getColumn = (i, j, board) => {
  const elements = [];
  for(let k = 0; k < 9; k++) {
    if(board[k][j] && board[k][j] != ".") {
      elements.push(board[k][j])
    }
  }
  return elements;
}

getBlock = (i, j, board) => {
  const elements = [];
  const row = ((i%3)*3);
  console.log(row)
  const column = ((j%3)*3);
  console.log(column)
  for(let k = row; k < 3; k++) {
    for(let l = column; l < 3; l++) {
      if(board[k][l] && board[k][l] != ".") {
        elements.push(board[k][l])
      }
    }
  }
  return elements
}

getPossiblities = (i, j, board) => {
  const elements = [];
  for(let k = 1; k <= 9; k++) {
    if(getRow(i, j, board).indexOf(k.toString()) === -1 &&
        getColumn(i, j, board).indexOf(k.toString()) === -1 &&
        getBlock(i, j, board).indexOf(k.toString())  === -1){
          console.log(i, j, k);
        elements.push(k);
    }
  }

  return elements;
}


const map = [];

for(let i = 0; i < board.length; i++) {
  for(let j = 0; j < board.length; j++) {
    if(board[i][j] === ".") {
      map.push({
        row: i,
        column: j,
        possiblities: getPossiblities(i, j, board),
      })
    }
  }
}

const emptyCellCount = map.length;
console.log(emptyCellCount)
console.log(map)


// while(emptyCellCount > 0) {
  // for(let i = 0; i < board.length; i++) {
  //   for(let j = 0; j < board.length; j++) {
  //     if(board[i][j] === ".") {
  //       for(let k = 5; k <= 9; k++) {
// const i = 5;
// const j = 6;
// const k = 1;

// console.log(getRow(i, j, board))
// console.log(getColumn(i, j, board))
// console.log(getBlock(i, j, board))

        // if(getRow(i, j, board).indexOf(k.toString()) === -1 &&
        // getColumn(i, j, board).indexOf(k.toString()) === -1 &&
        // getBlock(i, j, board).indexOf(k.toString())  === -1){
        //   console.log(i, j, k);
        // }
      // }
//     }
//   }
// }