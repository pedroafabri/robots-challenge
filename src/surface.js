class Surface {
  constructor (x, y) {
    this.x = x > 50 ? 50 : x
    this.y = y > 50 ? 50 : y
    this._scents = []
  }

  /**
   * Returns the grid as an object.
   */
  getGrid () {
    return {
      x: this.x,
      y: this.y
    }
  }

  /**
   * Returns the array os current scents in the grid.
   */
  getScents () {
    return this._scents
  }

  /**
   * Adds a new scent to the grid.
   * @param {Object} { x, y } Coordinates of the new scent.
   */
  addScent (scent) {
    this._scents.push(scent)
    return this._scents
  }

  /**
   * Returns a boolean value indicating if there's a scent in the current coordinate
   * @param {Object} { x, y } Coordinates to check for a scent.
   */
  hasScent ({ x, y }) {
    return !!this._scents.find(scent => scent.x === x && scent.y === y)
  }
}

module.exports = Surface
