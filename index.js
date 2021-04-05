const Surface = require('./src/surface')
const RobotFileReader = require('./src/robotFileReader')
const MovementController = require('./src/movementController')
const FileWriter = require('./src/fileWriter')
const path = require('path')

const defaultInputFile = path.join(__dirname, 'input.txt')
const defaultOutputFile = path.join(__dirname, 'output.txt')

const run = async (inputFile = defaultInputFile, outputFile = defaultOutputFile) => {
  const robotResults = []
  try{
    const fr = await RobotFileReader.initialize(inputFile)
    const [surfaceInfo] = await fr.readLines()
    const [surfaceX, surfaceY] = surfaceInfo.split(' ')
    const surface = new Surface(surfaceX, surfaceY)
    const controller = new MovementController(surface)
    
    while(true){
      const [initial, movements] = await fr.readLines(2)

      if(!initial || !movements) break

      const [x, y, direction] = initial.split(' ')
      const finalPosition = controller.moveRobot(x, y, direction, movements.trim())
      robotResults.push(finalPosition)
    }

    const data = robotResults.join('\n')
    FileWriter.write(data, outputFile) // write output
  }catch(error){
    console.error(error.message)
  }
}

run(process.argv[2], process.argv[3])