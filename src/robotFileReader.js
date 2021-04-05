const fs = require('fs')

// Closure function to read file lines
const readLineFactory = (file) => async () => {
  let buffer = Buffer.alloc(1)
  let str = ''
  
  do{
    const result = await file.read(buffer, 0, 1)
    if(!result.bytesRead) return null
    if(buffer.toString() !== '\n') str += buffer.toString()
  }while(buffer.toString() !== '\n')
  
  return str
}

class RobotFileReader{

  constructor(file){
    this._file = file
    this._readLine = readLineFactory(file)
  }

  static async initialize(filePath){
    if(!filePath) throw new Error('No file provided.')
    if(!fs.existsSync(filePath) || fs.lstatSync(filePath).isDirectory()) throw new Error('File not found.')
    const file = await fs.promises.open(filePath)
    return new RobotFileReader(file)
  }

  async readLines(number = 1){
    let lines = []

    while(lines.length < number){
      const line = await this._readLine()
      if(line === null) {
        this.closeFile()
        return []
      }
      if(line === '') continue
      lines.push(line)
    }

    return lines
  }

  closeFile(){
    this._file.close()
  }
}

module.exports = RobotFileReader