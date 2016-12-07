import filter from '../library/filter.js'

test(`filter`, () => {
  expect(typeof (filter)).toBe(`function`)

  expect(filter()).toEqual([])

  expect(
    filter(`hello`, [{ COMMAND: `hello`, PID: `10`, NAME: `` }])
  ).toEqual([])

  expect(
    filter(`hello`, [{ COMMAND: `hello`, PID: `10`, NAME: `(LISTEN)` }])
  ).toEqual([{ COMMAND: `hello`, PID: `10`, NAME: `(LISTEN)` }])

  expect(
    filter(10, [{ COMMAND: `hello`, PID: `10`, NAME: `` }])
  ).toEqual([])

  expect(
    filter(10, [{ COMMAND: `hello`, PID: `10`, NAME: `(LISTEN)` }])
  ).toEqual([{ COMMAND: `hello`, PID: `10`, NAME: `(LISTEN)` }])

  expect(
    filter(1701, [
      { COMMAND: `hello`, PID: `10`, NAME: `(ESTABLISHED)` },
      { COMMAND: `goodbye`, PID: `1701`, NAME: `(LISTEN)` }
    ])
  ).toEqual([{ COMMAND: `goodbye`, PID: `1701`, NAME: `(LISTEN)` }])
})
