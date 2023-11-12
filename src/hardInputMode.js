import { parseCommand } from './commandParser'
import { renderRobotOnTable } from './renderRobotOnTable'

export function hardInputMode(robot, table, readline) {
  readline.question('Enter command: ', (command) => {
    parseCommand(robot, table, command)
    renderRobotOnTable(robot, table)
    hardInputMode(robot, table, readline) // prompt again
  })
}
