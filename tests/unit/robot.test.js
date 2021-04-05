const { it, describe, expect } = require('@jest/globals')
const Robot = require('../../src/robot')

describe('Robot class tests', () => {
  it('Should instantiate new robot', () => {
    const robot = new Robot(2, 2, Robot.DIRECTION.N)
    const position = robot.getPosition()
    expect(robot).toBeInstanceOf(Robot)
    expect(position.x).toBe(2)
    expect(position.y).toBe(2)
    expect(position.direction).toBe('N')
  })

  it('Should cycle through directions while rotating clockwise', () => {
    const robot = new Robot(2, 2, Robot.DIRECTION.N)
    expect(robot.getPosition().direction).toBe('N')

    robot.turnRight()
    expect(robot.getPosition().direction).toBe('E')

    robot.turnRight()
    expect(robot.getPosition().direction).toBe('S')

    robot.turnRight()
    expect(robot.getPosition().direction).toBe('W')

    robot.turnRight()
    expect(robot.getPosition().direction).toBe('N')
  })

  it('Should cycle through directions while rotating counter-clockwise', () => {
    const robot = new Robot(2, 2, Robot.DIRECTION.N)
    expect(robot.getPosition().direction).toBe('N')

    robot.turnLeft()
    expect(robot.getPosition().direction).toBe('W')

    robot.turnLeft()
    expect(robot.getPosition().direction).toBe('S')

    robot.turnLeft()
    expect(robot.getPosition().direction).toBe('E')

    robot.turnLeft()
    expect(robot.getPosition().direction).toBe('N')
  })

  it('Should calculate walk North', () => {
    const robot = new Robot(2, 2, Robot.DIRECTION.N)
    const newPos = robot.calculateWalk()
    robot.setPosition(newPos)
    const position = robot.getPosition()
    expect(position.x).toBe(2)
    expect(position.y).toBe(3)
  })

  it('Should walk East', () => {
    const robot = new Robot(2, 2, Robot.DIRECTION.E)
    const newPos = robot.calculateWalk()
    robot.setPosition(newPos)
    const position = robot.getPosition()
    expect(position.x).toBe(3)
    expect(position.y).toBe(2)
  })

  it('Should walk South', () => {
    const robot = new Robot(2, 2, Robot.DIRECTION.S)
    const newPos = robot.calculateWalk()
    robot.setPosition(newPos)
    const position = robot.getPosition()
    expect(position.x).toBe(2)
    expect(position.y).toBe(1)
  })

  it('Should walk West', () => {
    const robot = new Robot(2, 2, Robot.DIRECTION.W)
    const newPos = robot.calculateWalk()
    robot.setPosition(newPos)
    const position = robot.getPosition()
    expect(position.x).toBe(1)
    expect(position.y).toBe(2)
  })
})