export default (query = undefined, lsofOutput = []) =>
  lsofOutput.reduce((results, row) =>
    (row.PID === query.toString() ||
    row.COMMAND.toLowerCase() === query.toString().toLowerCase()) &&
    row.NAME.indexOf(`(LISTEN)`) !== -1
    ? results.concat(row)
    : results
  , [])
