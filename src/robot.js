class Robot {
  constructor() {
    this.x = null
    this.y = null
    this.facing = null
    this.directions = ['NORTH', 'EAST', 'SOUTH', 'WEST']
  }

  place(x, y, facing) {
    this.x = x
    this.y = y
    this.facing = facing
  }

  move() {
    switch (this.facing) {
      case 'NORTH':
        this.y += 1
        break
      case 'SOUTH':
        this.y -= 1
        break
      case 'EAST':
        this.x += 1
        break
      case 'WEST':
        this.x -= 1
        break
    }
  }

  rotate(direction) {
    let index = this.directions.indexOf(this.facing)
    if (direction === 'LEFT') {
      index = (index + 3) % 4
    } else if (direction === 'RIGHT') {
      index = (index + 1) % 4
    }
    this.facing = this.directions[index]
  }

  report() {
    return `${this.x},${this.y},${this.facing}`
  }
}

module.exports = Robot
