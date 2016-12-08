# listen-port

Retrieve the port(s) that a process is listening on. Executes `lsof` behind the scenes.

## usage

```javascript
import port from 'listen-port'

port(`tor`)
  .then(ports => console.log(`tor is listening on ${ports}`))
  .catch(console.error)
```

## api

### `port(query)`

Returns a single value as a Number or an Array of multiple values.

#### `query`
A String containing a COMMAND or a PID as a Number.
