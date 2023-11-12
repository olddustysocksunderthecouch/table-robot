import { easyInputMode } from './easyInputMode'
import { hardInputMode } from './hardInputMode'
import { Robot } from './robot'
import { Table } from './table'
import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
})

// Make stdin emit keypress events
readline.emitKeypressEvents(process.stdin)
// This line is necessary to ensure that the input is not echoed
if (process.stdin.isTTY) process.stdin.setRawMode(true)

const robot = new Robot()
const table = new Table(5, 5)

function startInput() {
  rl.question(
    "Would you like to activate the easy mode for controlling the robot? [y/n]",
    (command) => {
      if (command === 'y') {
        console.log('Easy mode activated. Use the arrow keys to control the robot.')
        easyInputMode(robot, table)
      } else if (command === 'n') {
        console.log('Hard mode activated. Enter commands to control the robot.')
        console.log('Valid commands are: PLACE ${x},${y},${facing}, FORWARD, REVERSE, LEFT, RIGHT, REPORT')
        hardInputMode(robot, table, rl)
      } else {
        console.log('Invalid input. Please try again.')
        startInput()
      }
    }
  )
}

console.log('Toy Robot Simulator. Enter commands to control the robot:')
startInput()
