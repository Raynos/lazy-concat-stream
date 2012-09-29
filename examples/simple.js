var from = require("read-stream").fromArray
    , to = require("write-stream").toArray

    , concat = require("..")

var one = from([1])
    , two = from([2, 3])
    , three = from([4, 5, 6])

concat(one, two, three)
    .pipe(to(function (list) {
        console.log("list", list)
    }))
