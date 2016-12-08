export default (filtered = []) => {
  const results = filtered
    .map(row => parseInt(row.NAME.match(/:\d*(?=\s)/)[0].slice(1)), 10)
    .reduce(
      (uniq, port) => uniq.indexOf(port) === -1 ? uniq.concat(port) : uniq, []
    )

  return results.length > 1
  ? results
  : results[0]
}
