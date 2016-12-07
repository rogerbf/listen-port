import lsof from '../library/lsof.js'

it(`is a function`, () => {
  expect(typeof (lsof)).toEqual(`function`)
})

it(`returns a promise`, () => {
  expect(lsof().constructor.name).toBe(`Promise`)
})
