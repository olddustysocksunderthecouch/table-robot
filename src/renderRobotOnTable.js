export const renderRobotOnTable = (robot, table) => {
  let boardRepresentation = ''

  const arrows = {
    NORTH: '↑',
    EAST: '→',
    SOUTH: '↓',
    WEST: '←',
  }

  for (let y = table.height - 1; y >= 0; y--) {
    let row = ''
    for (let x = 0; x < table.width; x++) {
      if (robot.x === x && robot.y === y) {
        row += `[${arrows[robot.facing]}]` // Use arrow characters
      } else {
        row += '[ ]' // Empty square
      }
    }
    boardRepresentation += row + '\n'
  }

  console.log(boardRepresentation)
}
