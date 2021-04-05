const Robot = require('./robot')
const Surface = require('./surface')

const moveFactory = (robot) => (movement) => {
  switch(movement){
    case 'R': return robot.turnRight()
    case 'L': return robot.turnLeft()
    case 'F': return robot.calculateWalk()
  }
}

class MovementController{
  constructor(surface){
    if(!surface || !surface instanceof Surface) throw new Error('Parameter must be instance of a Surface.')
    this._surface = surface
  }

  moveRobot(initialX = 0, initialY = 0, initialDirection = 'N', movements = []){
    const robot = new Robot(initialX, initialY, Robot.DIRECTION[initialDirection])
    const move = moveFactory(robot)
    for(const movement of movements) {
      const newPosition = move(movement)
      if(this._surface.isOutOfBounds(newPosition)){
        // Robot trying to move out of bounds... is there any scent here?
        if(this._surface.hasScent(newPosition)) continue

        // If no scent, the robot is LOST
        this._surface.addScent({x: newPosition.x, y: newPosition.y})
        return this.endRobotPosition(robot, true)
      }
      robot.setPosition(newPosition)
    }
    return this.endRobotPosition(robot)
  }

  endRobotPosition(robot, lost = false){
    const pos = robot.getPosition()
    return `${pos.x} ${pos.y} ${pos.direction}${lost ? ' LOST' : ''}`
  }
}

module.exports = MovementController