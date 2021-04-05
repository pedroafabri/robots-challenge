const RobotFileReader = require('./src/robotFileReader')
const path = require('path')

const defaultInputFile = path.join(__dirname, 'input.txt')

const run = async (inputFile = defaultInputFile) => {
  try{
    const fr = await RobotFileReader.initialize(inputFile)
  }catch(error){
    console.error(error.message)
  }
}

run(process.argv[2])