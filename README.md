# lazy-concat-stream

Combine multiple readable streams into one

## Example

```
var from = require("read-stream").fromArray
    , to = require("write-stream").toArray
    , concat = require("lazy-concat-stream")

var one = from([1])
    , two = from([2, 3])
    , three = from([4, 5, 6])

concat(one, two, three)
    .pipe(to(function (list) {
        console.log("list", list)
    }))
```

## Installation

`npm install lazy-concat-stream`

## Contributors

 - Raynos

## MIT Licenced
