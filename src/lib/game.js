const boatsLength = {
  1:5,
  2:4,
  3:3,
  4:3,
  5:2
}

export const checkBoat = (boat, board) => {
  //count number of boat squares
  let counter = 0
  board.map(row => { return row.map(value => { return value === boat ? counter+=1 : counter })})

  let contained = false
  let arr = []

  //convert row into a string and check that the string [boat, boat, boat, ..] is contained
  for (let i = 0; i < boatsLength[boat]; i++) {arr.push(boat)}
  board.map(row => { return row.toString().indexOf(arr.toString()) !== -1 ? contained = true : contained})


  //column becomes row and check is made same as above
  let boardTransposed = board.map((row, y) => row.map((v, x) => board[x][y]))
  boardTransposed.map(row => { return row.toString().indexOf(arr.toString()) !== -1 ? contained = true : contained})

  //check that the counter is right and that the boat is horizontal or diagonal
  //return true
  if (counter === boatsLength[boat] && contained) return true
  return false
}

export const createBoatInstruction = (boat) => {
  return `Create boat${boat}, length ${boatsLength[boat]} squares and click OK`
}

export const checkWhatWasFired = (row, col, boatMap) => {
  let val = boatMap[row][col]
  //console.log(val);
  if (val === 0) return 1
  return 2
}
