const Robot = require('./robot')

describe('Robot', () => {
  let robot

  beforeEach(() => {
    robot = new Robot()
  })

  describe('place', () => {
    it('should set the robot position and facing direction', () => {
      robot.place(1, 2, 'NORTH')
      expect(robot.x).toEqual(1)
      expect(robot.y).toEqual(2)
      expect(robot.facing).toEqual('NORTH')
    })
  })

  describe('move', () => {
    it('should move the robot one unit north when facing north', () => {
      robot.place(0, 0, 'NORTH')
      robot.move()
      expect(robot.x).toEqual(0)
      expect(robot.y).toEqual(1)
      expect(robot.facing).toEqual('NORTH')
    })

    it('should move the robot one unit south when facing south', () => {
      robot.place(0, 1, 'SOUTH')
      robot.move()
      expect(robot.x).toEqual(0)
      expect(robot.y).toEqual(0)
      expect(robot.facing).toEqual('SOUTH')
    })

    it('should move the robot one unit east when facing east', () => {
      robot.place(0, 0, 'EAST')
      robot.move()
      expect(robot.x).toEqual(1)
      expect(robot.y).toEqual(0)
      expect(robot.facing).toEqual('EAST')
    })

    it('should move the robot one unit west when facing west', () => {
      robot.place(1, 0, 'WEST')
      robot.move()
      expect(robot.x).toEqual(0)
      expect(robot.y).toEqual(0)
      expect(robot.facing).toEqual('WEST')
    })
  })

  describe('rotate', () => {
    it('should rotate the robot 90 degrees to the left when facing north', () => {
      robot.place(0, 0, 'NORTH')
      robot.rotate('LEFT')
      expect(robot.x).toEqual(0)
      expect(robot.y).toEqual(0)
      expect(robot.facing).toEqual('WEST')
    })

    it('should rotate the robot 90 degrees to the right when facing north', () => {
      robot.place(0, 0, 'NORTH')
      robot.rotate('RIGHT')
      expect(robot.x).toEqual(0)
      expect(robot.y).toEqual(0)
      expect(robot.facing).toEqual('EAST')
    })

    it('should rotate the robot 90 degrees to the left when facing east', () => {
      robot.place(0, 0, 'EAST')
      robot.rotate('LEFT')
      expect(robot.x).toEqual(0)
      expect(robot.y).toEqual(0)
      expect(robot.facing).toEqual('NORTH')
    })

    it('should rotate the robot 90 degrees to the right when facing east', () => {
      robot.place(0, 0, 'EAST')
      robot.rotate('RIGHT')
      expect(robot.x).toEqual(0)
      expect(robot.y).toEqual(0)
      expect(robot.facing).toEqual('SOUTH')
    })

    it('should rotate the robot 90 degrees to the left when facing south', () => {
      robot.place(0, 0, 'SOUTH')
      robot.rotate('LEFT')
      expect(robot.x).toEqual(0)
      expect(robot.y).toEqual(0)
      expect(robot.facing).toEqual('EAST')
    })

    it('should rotate the robot 90 degrees to the right when facing south', () => {
      robot.place(0, 0, 'SOUTH')
      robot.rotate('RIGHT')
      expect(robot.x).toEqual(0)
      expect(robot.y).toEqual(0)
      expect(robot.facing).toEqual('WEST')
    })

    it('should rotate the robot 90 degrees to the left when facing west', () => {
      robot.place(0, 0, 'WEST')
      robot.rotate('LEFT')
      expect(robot.x).toEqual(0)
      expect(robot.y).toEqual(0)
      expect(robot.facing).toEqual('SOUTH')
    })

    it('should rotate the robot 90 degrees to the right when facing west', () => {
      robot.place(0, 0, 'WEST')
      robot.rotate('RIGHT')
      expect(robot.x).toEqual(0)
      expect(robot.y).toEqual(0)
      expect(robot.facing).toEqual('NORTH')
    })
  })

  describe('report', () => {
    it('should return the robot position and facing direction as a string', () => {
      robot.place(1, 2, 'EAST')
      expect(robot.report()).toEqual('1,2,EAST')
    })
  })
})
