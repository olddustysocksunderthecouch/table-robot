import { renderRobotOnTable } from './renderRobotOnTable'
import { Robot } from './robot'
import { Table } from './table'

describe('renderRobotOnTable', () => {
  it('should render an empty board', () => {
    const robot = new Robot()
    const table = new Table(5, 5)
    const consoleSpy = jest.spyOn(console, 'log')
    
    renderRobotOnTable(robot, table)

    const expectedBoard =
      '[ ][ ][ ][ ][ ]\n[ ][ ][ ][ ][ ]\n[ ][ ][ ][ ][ ]\n[ ][ ][ ][ ][ ]\n[ ][ ][ ][ ][ ]\n'
    expect(consoleSpy).toHaveBeenCalledWith(expectedBoard)
  })

  it('should render the robot on the board', () => {
    const robot = new Robot()
    robot.x = 2
    robot.y = 3
    robot.facing = 'NORTH'
    const table = new Table(5, 5)
    const consoleSpy = jest.spyOn(console, 'log')

    renderRobotOnTable(robot, table)

    const expectedBoard =
    '[ ][ ][ ][ ][ ]\n[ ][ ][↑][ ][ ]\n[ ][ ][ ][ ][ ]\n[ ][ ][ ][ ][ ]\n[ ][ ][ ][ ][ ]\n'
    expect(consoleSpy).toHaveBeenCalledWith(expectedBoard)
  })
})
