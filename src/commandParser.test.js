import { Robot } from './robot'
import { Table } from './table'
import { parseCommand } from './commandParser'

describe('parseCommand', () => {
  let robot
  let table

  beforeEach(() => {
    robot = new Robot()
    table = new Table(5, 5)
  })

  it('should place the robot on the table', () => {
    parseCommand(robot, table, 'PLACE 0,0,NORTH')
    expect(robot.x).toBe(0)
    expect(robot.y).toBe(0)
    expect(robot.facing).toBe('NORTH')
  })

  it('should not place the robot on the table if position is invalid', () => {
    parseCommand(robot, table, 'PLACE 6,6,NORTH')
    expect(robot.x).toEqual(null)
    expect(robot.y).toEqual(null)
    expect(robot.facing).toEqual(null)
  })

  it('should move the robot one unit forward', () => {
    parseCommand(robot, table, 'PLACE 0,0,NORTH')
    parseCommand(robot, table, 'FORWARD')
    expect(robot.x).toBe(0)
    expect(robot.y).toBe(1)
    expect(robot.facing).toBe('NORTH')
  })

  it('should not move the robot if it would fall off the table', () => {
    parseCommand(robot, table, 'PLACE 0,0,SOUTH')
    parseCommand(robot, table, 'FORWARD')
    expect(robot.x).toBe(0)
    expect(robot.y).toBe(0)
    expect(robot.facing).toBe('SOUTH')
  })

  it('should rotate the robot left', () => {
    parseCommand(robot, table, 'PLACE 0,0,NORTH')
    parseCommand(robot, table, 'LEFT')
    expect(robot.x).toBe(0)
    expect(robot.y).toBe(0)
    expect(robot.facing).toBe('WEST')
  })

  it('should rotate the robot right', () => {
    parseCommand(robot, table, 'PLACE 0,0,NORTH')
    parseCommand(robot, table, 'RIGHT')
    expect(robot.x).toBe(0)
    expect(robot.y).toBe(0)
    expect(robot.facing).toBe('EAST')
  })

  it('should report the robot position and facing', () => {
    parseCommand(robot, table, 'PLACE 1,2,EAST')
    const consoleSpy = jest.spyOn(console, 'log')
    parseCommand(robot, table, 'REPORT')
    expect(consoleSpy).toHaveBeenCalledWith('1,2,EAST')
  })
})
