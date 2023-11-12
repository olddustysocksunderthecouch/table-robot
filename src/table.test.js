const Table = require('./table').default

describe('Table', () => {
  describe('isValidPosition', () => {
    it('should return true when position is within table bounds', () => {
      const table = new Table(5, 5)
      expect(table.isValidPosition(0, 0)).toEqual(true)
      expect(table.isValidPosition(4, 4)).toEqual(true)
    })

    it('should return false when position is outside table bounds', () => {
      const table = new Table(5, 5)
      expect(table.isValidPosition(-1, 0)).toEqual(false)
      expect(table.isValidPosition(0, -1)).toEqual(false)
      expect(table.isValidPosition(5, 0)).toEqual(false)
      expect(table.isValidPosition(0, 5)).toEqual(false)
    })
  })
})
