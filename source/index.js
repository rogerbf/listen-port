import nativeLsof from './library/lsof'
import parseColumns from 'parse-columns'
import filter from './library/filter'
import extractPort from './library/extractPort'

const execute = (query, lsof) => {
  return (
    lsof()
    .then(parseColumns)
    .then(filter.bind(null, query))
    .then(extractPort)
  )
}

export default (query, externaLsof) => {
  const lsof = externaLsof || nativeLsof
  return (typeof (query) === `string` || typeof (query) === `number`)
  ? execute(query, lsof)
  : Promise.reject(new TypeError(`expected COMMAND as string or PID as number`))
}
