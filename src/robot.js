const directions = ['N', 'E', 'S', 'W']

class Robot{
  constructor(x, y, direction){
    this._position = { x, y, direction }
  }

  /**
   * Static direction ENUM
   */
  static DIRECTION = {
    N: 0,
    E: 1,
    S: 2,
    W: 3
  }

  /**
   * Returns the current position of the robot
   * Direction is replaced by the direction letter instead of index.
   */
  getPosition(){
    const pos = {...this._position}
    pos.direction = directions[this._position.direction]
    return pos
  }

  /**
   * Sets the new position of the bot
   * @param {Object} position 
   */
  setPosition(newPosition){
    this._position = newPosition
    return this._position
  }

  /**
   * Turn the robot to the next direction clockwise
   */
  turnRight() {
    this._position.direction = this._position.direction === directions.length - 1 ? 0 : this._position.direction + 1
    return this._position
  }

  /**
   * Turn the robot to the next direction counter-clockwise
   */
  turnLeft() {
    this._position.direction = this._position.direction === 0 ? directions.length - 1 : this._position.direction - 1
    return this._position
  }

  /**
   * Calculates the next coordinate before walking
   */
  calculateWalk() {
    const pos = {...this._position}
    const direction = directions[this._position.direction]
    switch(direction){
      case 'N':
        pos.y++
        break
      case 'E':
        pos.x++
        break
      case 'S':
        pos.y--
        break
      case 'W':
        pos.x--
        break
      default:
        throw new Error(`Direction "${direction}" unknown.`)
    }

    return pos
  }

}

module.exports = Robot
