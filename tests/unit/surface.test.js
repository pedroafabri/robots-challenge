/* globals describe, it, expect */
const { it, expect } = require('@jest/globals')
const Surface = require('../../src/surface')

describe('Surface class tests', () => {
  it('Should instantiate class', () => {
    const surface = new Surface(20, 20)
    expect(surface).toBeInstanceOf(Surface)
  })

  it('Should return grid correctly', () => {
    const surface = new Surface(5, 3)
    const grid = surface.getGrid()
    expect(typeof grid).toBe('object')
    expect(grid.x).toBe(5)
    expect(grid.y).toBe(3)
  })

  it('Should limit grid coordinates to 50', () => {
    const surface = new Surface(55, 55)
    const grid = surface.getGrid()
    expect(typeof grid).toBe('object')
    expect(grid.x).toBe(50)
    expect(grid.y).toBe(50)
  })

  it('Should return empty scents array', () => {
    const surface = new Surface(5, 3)
    const scents = surface.getScents
    expect(scents.length).not.toBeGreaterThan(0)
  })

  it('Should add a new scent', () => {
    const x = 1
    const y = 2
    const surface = new Surface(5, 3)

    const scents = surface.addScent({ x, y })
    expect(scents.length).toBe(1)
    expect(scents[0].x).toBe(x)
    expect(scents[0].y).toBe(y)
  })

  it('Should return false when coordinates does not contain scent', () => {
    const coordinate = {x: 2, y: 2}
    const surface = new Surface(5, 3)
    expect(surface.hasScent(coordinate)).toBe(false)
  })

  it('Should return true when coordinates contains a scent', () => {
    const coordinate = {x: 2, y: 2}
    const surface = new Surface(5, 3)
    surface.addScent(coordinate)
    expect(surface.hasScent(coordinate)).toBe(true)
  })

  it('Should return true when X is greater than bounds', () => {
    const coordinate = {x: 10, y: 2}
    const surface = new Surface(5, 3)
    expect(surface.isOutOfBounds(coordinate)).toBe(true)
  })

  it('Should return true when X is lower than 0', () => {
    const coordinate = {x: -1, y: 2}
    const surface = new Surface(5, 3)
    expect(surface.isOutOfBounds(coordinate)).toBe(true)
  })

  it('Should return true when Y is greater than bounds', () => {
    const coordinate = {x: 2, y: 10}
    const surface = new Surface(5, 3)
    expect(surface.isOutOfBounds(coordinate)).toBe(true)
  })

  it('Should return true when Y is lower than 0', () => {
    const coordinate = {x: 2, y: -1}
    const surface = new Surface(5, 3)
    expect(surface.isOutOfBounds(coordinate)).toBe(true)
  })

  it('Should return false when X and Y are within bounds', () => {
    const coordinate = {x: 2, y: 2}
    const surface = new Surface(5, 3)
    expect(surface.isOutOfBounds(coordinate)).toBe(false)
  })
})
