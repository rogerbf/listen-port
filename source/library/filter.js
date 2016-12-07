export default (query = undefined, lsofOutput = []) => {
  return lsofOutput.reduce((results, row) => {
    return (row.PID === query.toString() ||
    row.COMMAND.toLowerCase() === query.toString().toLowerCase()) &&
    row.NAME.indexOf(`(LISTEN)`) !== -1
    ? results.concat(row) : results
  }, [])
}
