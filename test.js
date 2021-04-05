const MovementController = require('./src/movementController')
const Surface = require('./src/surface')

const surface = new Surface(5, 3)
const mc = new MovementController(surface)

mc.moveRobot(0, 3, 'W', 'LLFFFLFLFL')