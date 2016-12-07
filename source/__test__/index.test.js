import ports from '../index.js'

it(`is defined`, () => expect(ports).toBeDefined())

it(`is a function`, () => expect(typeof (ports)).toEqual(`function`))

it(`rejects when called with wrong type`, () => {
  ports({})
    .then(port => expect(port).toBeFalsy())
    .catch(error => expect(error).toBeTruthy())
})

it(`returns a promise with expected results`, () => {
  const mocklsof = jest.fn()
  mocklsof.mockReturnValueOnce(Promise.resolve((
`
COMMAND    PID   NAME
loginwind  120   *:4050 (ESTABLISHED)
Enterprise 1771  127.0.0.1:6869 (LISTEN)
`
  )))
  ports(`notaproc`, mocklsof)
    .then(port => expect(port).toEqual(undefined))
    .catch(error => expect(error).toBeFalsy())
})

it(`returns a promise with expected results`, () => {
  const mocklsof = jest.fn()
  mocklsof.mockReturnValueOnce(Promise.resolve((
`
COMMAND    PID   NAME
loginwind  120   *:4050 (ESTABLISHED)
Enterprise 1771  127.0.0.1:6869 (LISTEN)
`
  )))
  ports(`Enterprise`, mocklsof)
    .then(port => expect(port).toEqual(6869))
    .catch(error => expect(error).toBeFalsy())
})

it(`returns a promise with expected results`, () => {
  const mocklsof = jest.fn()
  mocklsof.mockReturnValueOnce(Promise.resolve((
`
COMMAND     PID   NAME
loginwind   120   *:4050 (ESTABLISHED)
Enterprise  1701  127.0.0.1:6869 (LISTEN)
`
  )))
  ports(1701, mocklsof)
    .then(port => expect(port).toEqual(6869))
    .catch(error => expect(error).toBeFalsy())
})

it(`returns a promise with expected results`, () => {
  const mocklsof = jest.fn()
  mocklsof.mockReturnValueOnce(Promise.resolve((
`
COMMAND     PID    NAME
anon        73252  127.0.0.1:9055 (LISTEN)
anon        73252  127.0.0.1:9050 (LISTEN)
`
  )))
  ports(`anon`, mocklsof)
    .then(port => expect(port).toEqual([ 9055, 9050 ]))
    .catch(error => expect(error).toBeFalsy())
})
