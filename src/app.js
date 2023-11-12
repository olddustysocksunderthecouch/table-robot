import { Robot } from './robot'
import { Table } from './table'
import { parseCommand } from './commandParser'
import { renderRobotOnTable } from './renderRobotOnTable'

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

const robot = new Robot()
const table = new Table(5, 5)

function startInput() {
  readline.question('Enter command: ', (command) => {
    parseCommand(robot, table, command)
    renderRobotOnTable(robot, table)
    startInput() // prompt again
  })
}

console.log('Toy Robot Simulator. Enter commands to control the robot:')
startInput()
