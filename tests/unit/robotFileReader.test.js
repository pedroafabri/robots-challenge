const RobotFileReader = require('../../src/robotFileReader')
const path = require('path')

const testFile = path.join(__dirname, 'test.txt')
const dirPath = path.join(__dirname, '..', 'unit')
describe('Robot FileReader tests', () => {

  it('Should throw error when no file provided', async () => {
    await expect(RobotFileReader.initialize())
    .rejects
    .toThrow(Error)
  })

  it('Should throw error when non-existent file provided', async () => {
    await expect(RobotFileReader.initialize('banana.txt'))
    .rejects
    .toThrow(Error)
  })

  it('Should throw error when passing directory as file parameter', async () => {
    await expect(RobotFileReader.initialize(dirPath))
    .rejects
    .toThrow(Error)
  })

  it('Should instantiate class', async () => {
    const fr = await RobotFileReader.initialize(testFile)
    expect(fr).toBeInstanceOf(RobotFileReader)
  })

  it('Should read lines', async () => {
    const fr = await RobotFileReader.initialize(testFile)

    // Read coordinates
    const [line] = await fr.readLines()
    expect(line.trim()).toBe('5 3')

    // Read robot1
    const [R1L1, R1L2] = await fr.readLines(2)
    expect(R1L1.trim()).toBe('1 1 E')
    expect(R1L2.trim()).toBe('RFRFRFRF')

    // Read robot2
    const [R2L1, R2L2] = await fr.readLines(2)
    expect(R2L1.trim()).toBe('3 2 N')
    expect(R2L2.trim()).toBe('FRRFLLFFRRFLL')

    // Read robot3
    const [R3L1, R3L2] = await fr.readLines(2)
    expect(R3L1).toBe(undefined)
    expect(R3L2).toBe(undefined)
  })
})