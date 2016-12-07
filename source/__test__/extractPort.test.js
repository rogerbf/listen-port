import extractPort from '../library/extractPort.js'

test(`extractPort`, () => {
  expect(extractPort).toBeDefined()

  expect(extractPort()).toEqual(undefined)

  expect(extractPort([])).toEqual(undefined)

  expect(extractPort([{ NAME: `127.0.0.1:6258 (LISTEN)` }])).toEqual(6258)

  expect(extractPort([
    { NAME: `127.0.0.1:9050 (LISTEN)` },
    { NAME: `127.0.0.1:9055 (LISTEN)` }
  ])).toEqual([ 9050, 9055 ])
})
