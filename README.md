# listen-port

Retrieve the ports that a command or pid is listening on.

## usage

``` javascript
import port from 'listen-port'

port(`tor`)
  .then(ports => {
    console.log(`tor is listening on ${ports}`)
  })
  .catch(console.error)
```
