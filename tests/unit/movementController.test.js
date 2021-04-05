const MovementController = require("../../src/movementController")
const Surface = require("../../src/surface")
const surface = new Surface(5, 3)

describe('Movement Controller tests', () => {
  it('Should throw error while instantiating with wrong type', async () => {
    const instantiate = () => new MovementController()
    expect(instantiate).toThrow(Error)
  })

  it('Should instantiate', async () => {
    const mc = new MovementController(surface)
    expect(mc).toBeInstanceOf(MovementController)
  })

  it('Should move robot correctly', async () => {
    const mc = new MovementController(surface)
    const finalPosition = mc.moveRobot(1, 1, 'E', 'RFRFRFRF')
    expect(finalPosition.trim()).toBe('1 1 E')
  })

  it('Should move robot correctly and return it was lost', async () => {
    const mc = new MovementController(surface)
    const finalPosition = mc.moveRobot(3, 2, 'N', 'FRRFLLFFRRFLL')
    expect(finalPosition.trim()).toBe('3 3 N LOST')
  })

  it('Should move robot correctly with scents', async () => {
    const mc = new MovementController(surface)
    mc.moveRobot(3, 2, 'N', 'FRRFLLFFRRFLL') // Lost at first movement, left scent
    const finalPosition = mc.moveRobot(3, 2, 'N', 'FRRFLLFFRRFLL')
    expect(finalPosition.trim()).toBe('3 2 N')
  })

})