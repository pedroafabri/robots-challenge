const fs = require('fs')

const write = (data, fileName = 'output.txt') => fs.writeFileSync(fileName, data)

module.exports = {
  write
}