export default (filtered = []) => {
  const results = filtered.map(row =>
    parseInt(row.NAME.match(/:\d*(?=\s)/)[0].slice(1)), 10
  )

  return results.length > 1
  ? results
  : results[0]
}
