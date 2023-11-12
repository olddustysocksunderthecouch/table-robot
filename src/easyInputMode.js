import { parseCommand } from './commandParser'
import { renderRobotOnTable } from './renderRobotOnTable'

export function easyInputMode(robot, table) {
  parseCommand(robot, table, 'PLACE 0,0,NORTH')
  renderRobotOnTable(robot, table)
  
  process.stdin.on('keypress', (str, key) => {
    if (key.name === 'up') {
      parseCommand(robot, table, 'FORWARD')
    } else if (key.name === 'left') {
      parseCommand(robot, table, 'LEFT')
    } else if (key.name === 'right') {
      parseCommand(robot, table, 'RIGHT')
    } else if (key.name === 'down') {
        parseCommand(robot, table, 'REVERSE')
    }
    renderRobotOnTable(robot, table)
  })
}
