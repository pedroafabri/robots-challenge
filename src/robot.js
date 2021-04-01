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
   * Turn the robot to the next direction clockwise
   */
  turnRight() {
    this._position.direction = this._position.direction === directions.length - 1 ? 0 : this._position.direction + 1
  }

  /**
   * Turn the robot to the next direction counter-clockwise
   */
  turnLeft() {
    this._position.direction = this._position.direction === 0 ? directions.length - 1 : this._position.direction - 1
  }

  /**
   * Walks the robot forward
   */
  walk(){
    const direction = directions[this._position.direction]
    switch(direction){
      case 'N':
        this._walkNorth()
        break
      case 'E':
        this._walkEast()
        break
      case 'S':
        this._walkSouth()
        break
      case 'W':
        this._walkWest()
        break
      default:
        throw new Error(`Direction "${direction}" unknown.`)
    }
  }

  _walkNorth(){ this._position.y++ }
  _walkEast(){ this._position.x++ }
  _walkSouth(){ this._position.y-- }
  _walkWest(){ this._position.x-- }
}

module.exports = Robot
