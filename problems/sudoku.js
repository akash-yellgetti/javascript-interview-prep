const sudoku = {
  getRow: (i, j, board) => {
    const elements = [];
    for(let k = 0; k < 9; k++) {
      if(board[i][k] && board[i][k] != ".") {
        elements.push(board[i][k])
      }
    }
    return elements;
  },

  getColumn: (i, j, board) => {
    const elements = [];
    for(let k = 0; k < 9; k++) {
      if(board[k][j] && board[k][j] != ".") {
        elements.push(board[k][j])
      }
    }
    return elements;
  },

  getBlock: (i, j, board) => {
    const elements = [];
    let row = Math.floor(i / 3) * 3;
    let column = Math.floor(j / 3) * 3;
    // console.log(i, j, row, column)
    for(let k = 0; k < 3; k++) {
      for(let l = 0; l < 3; l++) {

        if(board[k+row][l+column] && board[k+row][l+column] != ".") {
          elements.push(board[k+row][l+column])
        }
      }
    }
    return elements
  },

  getPossiblities: function (i, j, board) {
    const elements = [];
    for(let k = 1; k <= 9; k++) {
      if(this.getRow(i, j, board).indexOf(k.toString()) === -1 &&
          this.getColumn(i, j, board).indexOf(k.toString()) === -1 &&
          this.getBlock(i, j, board).indexOf(k.toString())  === -1){
            // console.log(i, j, k);
          elements.push(k);
      }
    }

    return elements;
  },

  getEmptyCells: function(board) {
    const map = [];
    for(let i = 0; i < board.length; i++) {
      for(let j = 0; j < board.length; j++) {
        if(board[i][j] === ".") {
          map.push({
            row: i,
            column: j,
            possiblities: this.getPossiblities(i, j, board),
            block: this.getBlock(i, j, board),
          })
        }
      }
    }
    return map;
  },

  setEmptyCells: function(map, board) {
    // const board = this.board;
    for(let i in map) {
      if(map[i]['possiblities'].length === 1) {
        let data = map[i];
        // console.log(data)
        board[data.row][data.column] = map[i]['possiblities'].pop().toString();
      }
    }
    return board;
  },

  solve: function (board) {
    let data = sudoku.getEmptyCells(board);
    let i = 0;
    while(data.length > 0 && i < 150) {
      board = sudoku.setEmptyCells(data, board)
      // console.log(board.length);
      data = sudoku.getEmptyCells(board);
      console.log(data);
      console.log(data.length);
      i++;
      console.log(i);
    }

    return board;
  }
}

let board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];
// let board =  [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9",".",".",".",".",".","6","."]
// ,[".",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]];

const data = sudoku.solve(board);

console.log(data);