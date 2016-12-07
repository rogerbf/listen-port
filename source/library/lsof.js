import exec from 'bound-execfile'

const lsof = exec(`lsof`)

export default () => lsof([ `-i`, `-n`, `-P` ])
