const path = require('path')
const fs = require('fs')
const { exec } = require('child_process')

const inputFile = path.join(__dirname, 'inputFile.txt')
const outputFile = path.join(__dirname, 'outputFile.txt')

describe('Full e2e process test', () => {
  beforeAll(() => {
    if(fs.existsSync(outputFile)) fs.unlinkSync(outputFile)
  })

  it('Should output robots final locations', async () => {
    await exec(`yarn start ${inputFile} ${outputFile}`, () => {
      expect(fs.existsSync(outputFile)).toBeTruthy()
      const content = fs.readFileSync(outputFile, {encoding: 'utf-8'})
      expect(content).toBe('1 1 E\n3 2 N LOST\n3 1 N\n0 3 S LOST')
    })
  })
})