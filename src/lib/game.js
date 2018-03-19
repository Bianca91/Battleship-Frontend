const boatsLength = {
  1:5,
  2:4,
  3:3,
  4:3,
  5:2
}


export const checkBoat = (boat) => {
  return true
}

export const createBoatInstruction = (boat) => {
  switch (boat) {
    case 1: return "Create Boat1 length 5 squares and click OK"
    case 2: return "Create Boat2 length 4 squares and click OK"
    case 3: return "Create Boat3 length 3 squares and click OK"
    case 4: return "Create Boat4 length 3 squares and click OK"
    case 5: return "Create Boat5 length 2 squares and click OK"
    default: return "game state unknown"
  }
}

//string interpolation possible
